// Code generated by Prisma (prisma@1.22.0-alpha.110). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from 'graphql'
import { makePrismaClientClass, BaseClientOptions } from 'prisma-client-lib'
import { typeDefs } from './prisma-schema'

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U]

export interface Exists {
  todo: (where?: TodoWhereInput) => Promise<boolean>
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>
}

export interface Prisma {
  $exists: Exists
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any },
  ) => Promise<T>

  /**
   * Queries
   */

  todo: (where: TodoWhereUniqueInput) => TodoPromise
  todoes: (
    args?: {
      where?: TodoWhereInput
      orderBy?: TodoOrderByInput
      skip?: Int
      after?: String
      before?: String
      first?: Int
      last?: Int
    },
  ) => FragmentableArray<Todo>
  todoesConnection: (
    args?: {
      where?: TodoWhereInput
      orderBy?: TodoOrderByInput
      skip?: Int
      after?: String
      before?: String
      first?: Int
      last?: Int
    },
  ) => TodoConnectionPromise
  node: (args: { id: ID_Output }) => Node

  /**
   * Mutations
   */

  createTodo: (data: TodoCreateInput) => TodoPromise
  updateTodo: (
    args: { data: TodoUpdateInput; where: TodoWhereUniqueInput },
  ) => TodoPromise
  updateManyTodoes: (
    args: { data: TodoUpdateManyMutationInput; where?: TodoWhereInput },
  ) => BatchPayloadPromise
  upsertTodo: (
    args: {
      where: TodoWhereUniqueInput
      create: TodoCreateInput
      update: TodoUpdateInput
    },
  ) => TodoPromise
  deleteTodo: (where: TodoWhereUniqueInput) => TodoPromise
  deleteManyTodoes: (where?: TodoWhereInput) => BatchPayloadPromise

  /**
   * Subscriptions
   */

  $subscribe: Subscription
}

export interface Subscription {
  todo: (
    where?: TodoSubscriptionWhereInput,
  ) => TodoSubscriptionPayloadSubscription
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T
}

/**
 * Types
 */

export type TodoOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export interface TodoCreateInput {
  title: String
}

export interface TodoUpdateInput {
  title?: String
}

export interface TodoWhereInput {
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTimeInput
  createdAt_not?: DateTimeInput
  createdAt_in?: DateTimeInput[] | DateTimeInput
  createdAt_not_in?: DateTimeInput[] | DateTimeInput
  createdAt_lt?: DateTimeInput
  createdAt_lte?: DateTimeInput
  createdAt_gt?: DateTimeInput
  createdAt_gte?: DateTimeInput
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  AND?: TodoWhereInput[] | TodoWhereInput
  OR?: TodoWhereInput[] | TodoWhereInput
  NOT?: TodoWhereInput[] | TodoWhereInput
}

export interface TodoUpdateManyMutationInput {
  title?: String
}

export interface TodoSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TodoWhereInput
  AND?: TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput
  OR?: TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput
  NOT?: TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput
}

export type TodoWhereUniqueInput = AtLeastOne<{
  id: ID_Input
  title?: String
}>

export interface NodeNode {
  id: ID_Output
}

export interface TodoEdge {
  cursor: String
}

export interface TodoEdgePromise extends Promise<TodoEdge>, Fragmentable {
  node: <T = TodoPromise>() => T
  cursor: () => Promise<String>
}

export interface TodoEdgeSubscription
  extends Promise<AsyncIterator<TodoEdge>>,
    Fragmentable {
  node: <T = TodoSubscription>() => T
  cursor: () => Promise<AsyncIterator<String>>
}

export interface BatchPayload {
  count: Long
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>
}

export interface Todo {
  id: ID_Output
  createdAt: DateTimeOutput
  title: String
}

export interface TodoPromise extends Promise<Todo>, Fragmentable {
  id: () => Promise<ID_Output>
  createdAt: () => Promise<DateTimeOutput>
  title: () => Promise<String>
}

export interface TodoSubscription
  extends Promise<AsyncIterator<Todo>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>
  title: () => Promise<AsyncIterator<String>>
}

export interface TodoSubscriptionPayload {
  mutation: MutationType
  updatedFields?: String[]
}

export interface TodoSubscriptionPayloadPromise
  extends Promise<TodoSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>
  node: <T = TodoPromise>() => T
  updatedFields: () => Promise<String[]>
  previousValues: <T = TodoPreviousValuesPromise>() => T
}

export interface TodoSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TodoSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>
  node: <T = TodoSubscription>() => T
  updatedFields: () => Promise<AsyncIterator<String[]>>
  previousValues: <T = TodoPreviousValuesSubscription>() => T
}

export interface TodoConnection {}

export interface TodoConnectionPromise
  extends Promise<TodoConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T
  edges: <T = FragmentableArray<TodoEdge>>() => T
  aggregate: <T = AggregateTodoPromise>() => T
}

export interface TodoConnectionSubscription
  extends Promise<AsyncIterator<TodoConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T
  edges: <T = Promise<AsyncIterator<TodoEdgeSubscription>>>() => T
  aggregate: <T = AggregateTodoSubscription>() => T
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>
  hasPreviousPage: () => Promise<Boolean>
  startCursor: () => Promise<String>
  endCursor: () => Promise<String>
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>
  startCursor: () => Promise<AsyncIterator<String>>
  endCursor: () => Promise<AsyncIterator<String>>
}

export interface AggregateTodo {
  count: Int
}

export interface AggregateTodoPromise
  extends Promise<AggregateTodo>,
    Fragmentable {
  count: () => Promise<Int>
}

export interface AggregateTodoSubscription
  extends Promise<AsyncIterator<AggregateTodo>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>
}

export interface TodoPreviousValues {
  id: ID_Output
  createdAt: DateTimeOutput
  title: String
}

export interface TodoPreviousValuesPromise
  extends Promise<TodoPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>
  createdAt: () => Promise<DateTimeOutput>
  title: () => Promise<String>
}

export interface TodoPreviousValuesSubscription
  extends Promise<AsyncIterator<TodoPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>
  title: () => Promise<AsyncIterator<String>>
}

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type Long = string

/**
 * Model Metadata
 */

export const models = [
  {
    name: 'Todo',
    embedded: false,
  },
]

/**
 * Type Defs
 */

export const prisma: Prisma
