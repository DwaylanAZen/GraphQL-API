// gql is a varialbe that is going to allow us to write pure graphQL in javascript
const {gql} = require("apollo-server");

// yes... we are writing code inside of backticks
// Once again typeDefs = type definition. We are currently defining the query types

// *** What is a enum? An enum type is a special data type that enables for a variable
//  to be a set of predefined constants. Example: "Field" is a set of predifined constants
// there are only so many to countries from 

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        hp: Int!
        mp: Int!
        attacks: [Attack]
        level: String!
        type: String!
        attribute: String!
        field: Field! 
        friends: [User]
        jogress: [Evolution]

    }

    type Evolution {
        id: ID!
        name: String!
        username: String!
        hp: Int!
        mp: Int!
        level: String!
        type: String!
        attribute: String!
        field: Field! 

    }

    type Attack {
        id: ID!
        name: String!
        username: String!
        hp: Int!
        mp: Int!
    }
    
    type Query {
        users: [User!]!
        user(id: ID!): User!
    }

    enum Field {
        DEEP_SAVERS 
        DRAGONS_ROAR 
        METAL_EMPIRE 
        NATURE_SPIRITS 
        NIGHTMARE_SOLDIERS 
        VIRUS_BUSTERS
        JUNGLE_TROOPERS
    }
`;
module.exports = {typeDefs}
