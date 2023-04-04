const {DigimonList} = require('../FakeData');
const _ = require ("lodash");


// Resolvers are functions that resolve the queries. They contain the payload logic.
// *** "Parent" gives you the value parent in the chain of types
// 'args' is a object that contains whatever data a user passes in the argument of a query***
const resolvers = {
    Query : {
        users: () => {
            return DigimonList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(DigimonList, {id});
            return user;
        },
        attacks: (parent,args) =>{
            const attacks = args.attacks
            const attack = _.find(DigimonList,{attacks})

            return attack
        }
    },
};

module.exports = {resolvers};