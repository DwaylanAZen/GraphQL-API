// gql is a varialbe that is going to allow us to write pure graphQL in javascript
const {gql} = require("apollo-server");

// yes... we are writing code inside of backticks
// Once again typeDefs = type definition. We are currently defining the query types

// *** What is a enum? An enum type is a special data type that enables for a variable
//  to be a set of predefined constants. Example: Nationality is a set of predifined constants
// there are only so many to countries from 

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality! 
        friends: [User]

    }
    
    type Query {
        users: [User!]!
        user(id: ID!): User!
    }

    enum Nationality {
        UNITED_STATES 
        IRELAND 
        BRAZIL 
        PHILIPPINES 
        DOMINICAN_REPUBLIC 
        SPAIN
        RUSSIA

    }
`;
module.exports = {typeDefs}
