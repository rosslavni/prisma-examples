/* @flow */
import { User_Type } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'
import { PostParent } from './Post'

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
  posts: parent => parent.posts,
}
