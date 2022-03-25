const {ApolloServer} = require ("apollo-server")
const {typeDefs} = require('./schema/type-def')
const {resolvers} = require('./schema/resolvers')

// Every piece of data, type, and query will exist in the typeDefs variable, all of the functions
// that reserve those types and do stuff like make calls to APIs and databases, send data back, etc. will exist in resolvers.
// Resolvers are just functions that deal with data.
const server = new ApolloServer({typeDefs, resolvers})


// Defining the runtime enviorment
server.listen().then (({url}) => {
    console.log(`Success. API is now running at ${url}`)
})