const {UserList} = require('../FakeData')


// Resolvers are functions that resolve the queries. They contain the payload logic.
const resolvers = {
    Query : {
        users(){

            return UserList;
        }
    }
}

module.exports = {resolvers};