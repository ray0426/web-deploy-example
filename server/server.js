import { GraphQLServer, PubSub } from 'graphql-yoga'

import path from 'path';
import mongoose from 'mongoose';

import Query from  './resolvers/Query'
import Mutation from  './resolvers/Mutation'

//const isProduction = process.env.NODE_ENV === 'production'
require('dotenv').config()

const dboptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    auto_reconnect: true,
    useUnifiedTopology: true,
    poolSize: 10
}
  // TODO : connect mongodb here
if (!(process.env.MONGO_URL || process.env.MONGODB_URI)) {
    console.error('Missing MONGO_URL!!!')
    process.exit(1)
}

mongoose.connect(process.env.MONGO_URL || process.env.MONGODB_URI, dboptions)

const db = mongoose.connection

  db.on('error', (error) => {
    console.error(error)
})

  db.once('open', () => {
    console.log('MongoDB connected!')
})


const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './server/schema.graphql',
  resolvers: {
    Query,
    Mutation
  },
  context: req => {
    return{
      req,
      pubsub
    }
  }
})


const port = process.env.PORT || 4000

server.start(port, () => {
  console.log(`The server is up on port ${port} for graphQL!`)
})
