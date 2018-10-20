const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // points to Prisma database schema
      endpoint: 'http://localhost:4466/resolver-forwarding-example/dev', // Prisma service endpoint (see `~/.prisma/config.yml`)
      secret: 'mysecret123', // `secret` taken from `prisma.yml`
      debug: true, // log all requests to the Prisma API to console
    }),
  }),
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
