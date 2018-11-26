// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql'
import { User, Post } from './prisma-client'
import { AuthPayload } from '../types'
import { Context } from '../types'

export namespace QueryResolvers {
  export const defaultResolvers = {}

  export interface ArgsFilterPosts {
    searchString: string | null
  }

  export interface ArgsPost {
    id: string
  }

  export type MeResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | null | Promise<User | null>

  export type FeedResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post[] | Promise<Post[]>

  export type FilterPostsResolver = (
    parent: undefined,
    args: ArgsFilterPosts,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post[] | Promise<Post[]>

  export type PostResolver = (
    parent: undefined,
    args: ArgsPost,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | null | Promise<Post | null>

  export interface Type {
    me: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | null | Promise<User | null>

    feed: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post[] | Promise<Post[]>

    filterPosts: (
      parent: undefined,
      args: ArgsFilterPosts,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post[] | Promise<Post[]>

    post: (
      parent: undefined,
      args: ArgsPost,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post | null | Promise<Post | null>
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    email: (parent: User) => parent.email,
    name: (parent: User) => (parent.name === undefined ? null : parent.name),
  }

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type PostsResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post[] | Promise<Post[]>

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    email: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    name: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>

    posts: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post[] | Promise<Post[]>
  }
}

export namespace PostResolvers {
  export const defaultResolvers = {
    id: (parent: Post) => parent.id,
    createdAt: (parent: Post) => parent.createdAt,
    updatedAt: (parent: Post) => parent.updatedAt,
    published: (parent: Post) => parent.published,
    title: (parent: Post) => parent.title,
    content: (parent: Post) =>
      parent.content === undefined ? null : parent.content,
  }

  export type IdResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CreatedAtResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UpdatedAtResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PublishedResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type TitleResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ContentResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type AuthorResolver = (
    parent: Post,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>

  export interface Type {
    id: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    createdAt: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    updatedAt: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    published: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>

    title: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    content: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>

    author: (
      parent: Post,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {}

  export interface ArgsCreateDraft {
    title: string
    content: string | null
  }

  export interface ArgsDeletePost {
    id: string
  }

  export interface ArgsPublish {
    id: string
  }

  export interface ArgsSignup {
    email: string
    password: string
    name: string | null
  }

  export interface ArgsLogin {
    email: string
    password: string
  }

  export type CreateDraftResolver = (
    parent: undefined,
    args: ArgsCreateDraft,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | Promise<Post>

  export type DeletePostResolver = (
    parent: undefined,
    args: ArgsDeletePost,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | null | Promise<Post | null>

  export type PublishResolver = (
    parent: undefined,
    args: ArgsPublish,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => Post | null | Promise<Post | null>

  export type SignupResolver = (
    parent: undefined,
    args: ArgsSignup,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => AuthPayload | Promise<AuthPayload>

  export type LoginResolver = (
    parent: undefined,
    args: ArgsLogin,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => AuthPayload | Promise<AuthPayload>

  export interface Type {
    createDraft: (
      parent: undefined,
      args: ArgsCreateDraft,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post | Promise<Post>

    deletePost: (
      parent: undefined,
      args: ArgsDeletePost,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post | null | Promise<Post | null>

    publish: (
      parent: undefined,
      args: ArgsPublish,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => Post | null | Promise<Post | null>

    signup: (
      parent: undefined,
      args: ArgsSignup,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => AuthPayload | Promise<AuthPayload>

    login: (
      parent: undefined,
      args: ArgsLogin,
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => AuthPayload | Promise<AuthPayload>
  }
}

export namespace AuthPayloadResolvers {
  export const defaultResolvers = {
    token: (parent: AuthPayload) => parent.token,
    user: (parent: AuthPayload) => parent.user,
  }

  export type TokenResolver = (
    parent: AuthPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UserResolver = (
    parent: AuthPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo,
  ) => User | Promise<User>

  export interface Type {
    token: (
      parent: AuthPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>

    user: (
      parent: AuthPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo,
    ) => User | Promise<User>
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type
  User: UserResolvers.Type
  Post: PostResolvers.Type
  Mutation: MutationResolvers.Type
  AuthPayload: AuthPayloadResolvers.Type
}
