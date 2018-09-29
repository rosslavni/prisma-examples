const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Context, getUserId, APP_SECRET } = require('./utils')

// resolve the `AuthPayload` type
const AuthPayload = {
  user: async ({ user: { id } }, args, ctx, info) => {
    console.log(`resolve AuthPayload`)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

// query the currently logged in user
function me(parent, args, ctx, info) {
  const id = getUserId(ctx)
  return ctx.db.query.user({ where: { id } }, info)
}

// register a new user
async function signup(parent, args, ctx, info) {
  const password = await bcrypt.hash(args.password, 10)
  const role = args.admin ? 'ADMIN' : 'CUSTOMER'

  // remove `admin` from `args`
  const { admin, ...data } = args

  const user = await ctx.db.mutation.createUser({
    data: { ...data, role, password },
  })

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  }
}

// log in an existing user
async function login(parent, { email, password }, ctx, info) {
  const user = await ctx.db.query.user({ where: { email } })
  if (!user) {
    throw new Error(`No such user found for email: ${email}`)
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user,
  }
}

// update the password of an existing user
async function updatePassword(
  parent,
  { oldPassword, newPassword, userId },
  ctx,
  info,
) {
  if (!userId) {
    // a user updates her own password
    userId = getUserId(ctx)
    const user = await ctx.db.query.user({ where: { id: userId } })
    const oldPasswordValid = await bcrypt.compare(oldPassword, user.password)
    if (!oldPasswordValid) {
      throw new Error(
        'Old password was wrong, please try again or contact an admin to reset your password',
      )
    }
    const newPasswordHash = await bcrypt.hash(newPassword, 10)
    try {
      await ctx.db.mutation.updateUser({
        where: { id: userId },
        data: { password: newPasswordHash },
      })
    } catch (e) {
      return e
    }
    return user
  } else {
    // a user updates the password of another user -> must be an admin
    const requestingUserId = getUserId(ctx)
    const userIsAdmin = ctx.db.exists.User({
      id: requestingUserId,
      role: 'ADMIN',
    })
    const user = await ctx.db.query.user({ where: { id: userId } })
    const newPasswordHash = await bcrypt.hash(newPassword, 10)
    try {
      await ctx.db.mutation.updateUser({
        where: { id: userId },
        data: { password: newPasswordHash },
      })
    } catch (e) {
      return e
    }
    return user
  }
}

module.exports = {
  me,
  signup,
  login,
  updatePassword,
  AuthPayload,
}
