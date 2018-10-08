/* @flow */
import type { User_Type } from '../generated/resolvers'
import type { TypeMap } from './types/TypeMap'
import type { PostParent } from './Post'

export interface UserParent {
  id: string;
  email: string;
  name: string;
  posts: PostParent[];
}

export const User: User_Type<TypeMap> = {
  id: parent => parent.id,
  email: parent => parent.email,
  name: parent => parent.name,
  posts: (parent, args, ctx) => ctx.db.user({ id: parent.id }).posts(),
}
