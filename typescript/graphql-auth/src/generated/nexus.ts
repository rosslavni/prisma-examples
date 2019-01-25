/**
 * This file is automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 *
 * For better typings, you should provide configuration for how to lookup
 * the types. See the documentation for "typegenAutoConfig"
 */
import * as types from '../types'
import * as prisma from './prisma-client/index'

declare global {
  interface GraphQLNexusGen extends GraphQLNexusGenTypes {}
}

// Maybe Promise
export type MaybePromise<T> = T | PromiseLike<T>

// Maybe Promise List
export type MaybePromiseList<T> = Array<MaybePromise<T>>

// Maybe Thunk
export type MaybeThunk<T> = T | (() => T)

// Maybe Thunk, with args
export type MaybeThunkArgs<T, A> = T | ((args?: A) => T)

export type QueryFeedReturnType = MaybePromiseList<Post_ReturnType>

export type QueryFilterPostsReturnType = MaybePromiseList<Post_ReturnType>

export interface QueryFilterPostsArgs {
  searchString?: null | string
}

export type QueryMeReturnType = User_ReturnType

export type QueryPostReturnType = null | Post_ReturnType

export interface QueryPostArgs {
  id: string
}

export type Query_ReturnType = {}

export type PostAuthorReturnType = User_ReturnType

export type PostContentReturnType = null | string

export type PostCreatedAtReturnType = unknown

export type PostIdReturnType = string

export type PostPublishedReturnType = boolean

export type PostTitleReturnType = string

export type PostUpdatedAtReturnType = unknown

export type PostRootType = prisma.Post

export type Post_ReturnType = prisma.Post

export type UserEmailReturnType = string

export type UserIdReturnType = string

export type UserNameReturnType = null | string

export type UserPostsReturnType = MaybePromiseList<Post_ReturnType>

export type UserRootType = prisma.User

export type User_ReturnType = prisma.User

export type MutationCreateDraftReturnType = Post_ReturnType

export interface MutationCreateDraftArgs {
  content?: null | string
  title: string
}

export type MutationDeletePostReturnType = null | Post_ReturnType

export interface MutationDeletePostArgs {
  id: string
}

export type MutationLoginReturnType = AuthPayload_ReturnType

export interface MutationLoginArgs {
  email: string
  password: string
}

export type MutationPublishReturnType = null | Post_ReturnType

export interface MutationPublishArgs {
  id: string
}

export type MutationSignupReturnType = AuthPayload_ReturnType

export interface MutationSignupArgs {
  email: string
  name?: null | string
  password: string
}

export type Mutation_ReturnType = {}

export type AuthPayloadTokenReturnType = string

export type AuthPayloadUserReturnType = User_ReturnType

export interface AuthPayloadRootType {
  token: string
  user: any
}

export type AuthPayload_ReturnType = {
  token: MaybeThunk<MaybePromise<string>>
  user: MaybeThunk<MaybePromise<any>>
}

export interface GraphQLNexusGenArgTypes {
  Query: {
    filterPosts: QueryFilterPostsArgs
    post: QueryPostArgs
  }
  Mutation: {
    createDraft: MutationCreateDraftArgs
    deletePost: MutationDeletePostArgs
    login: MutationLoginArgs
    publish: MutationPublishArgs
    signup: MutationSignupArgs
  }
}

export interface GraphQLNexusGenRootTypes {
  Query: {}
  Post: PostRootType
  User: UserRootType
  Mutation: {}
  AuthPayload: AuthPayloadRootType
}

export interface GraphQLNexusGenReturnTypes {
  Query: {
    feed: QueryFeedReturnType
    filterPosts: QueryFilterPostsReturnType
    me: QueryMeReturnType
    post: QueryPostReturnType
  }
  Post: {
    author: PostAuthorReturnType
    content: PostContentReturnType
    createdAt: PostCreatedAtReturnType
    id: PostIdReturnType
    published: PostPublishedReturnType
    title: PostTitleReturnType
    updatedAt: PostUpdatedAtReturnType
  }
  User: {
    email: UserEmailReturnType
    id: UserIdReturnType
    name: UserNameReturnType
    posts: UserPostsReturnType
  }
  Mutation: {
    createDraft: MutationCreateDraftReturnType
    deletePost: MutationDeletePostReturnType
    login: MutationLoginReturnType
    publish: MutationPublishReturnType
    signup: MutationSignupReturnType
  }
  AuthPayload: {
    token: AuthPayloadTokenReturnType
    user: AuthPayloadUserReturnType
  }
}

export interface GraphQLNexusGenTypes {
  argTypes: GraphQLNexusGenArgTypes
  backingTypes: GraphQLNexusGenRootTypes
  returnTypes: GraphQLNexusGenReturnTypes
  context: types.Context
  enums: {}
  objects: {
    Query: {}
    Post: PostRootType
    User: UserRootType
    Mutation: {}
    AuthPayload: AuthPayloadRootType
  }
  interfaces: {}
  unions: {}
  scalars: {
    String: any
    ID: any
    DateTime: any
    Boolean: any
  }
  inputObjects: {}
  allInputTypes:
    | Extract<keyof GraphQLNexusGenTypes['inputObjects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>
  allOutputTypes:
    | Extract<keyof GraphQLNexusGenTypes['objects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['unions'], string>
    | Extract<keyof GraphQLNexusGenTypes['interfaces'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>
}

export type Gen = GraphQLNexusGenTypes
