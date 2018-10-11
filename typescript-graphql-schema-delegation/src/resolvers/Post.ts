export const Post = {
  id: parent => parent.id,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  isPublished: parent => parent.isPublished,
  title: parent => parent.title,
  content: parent => parent.content,
  author: parent => parent.author,
}
