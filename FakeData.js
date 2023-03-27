// Generating fake data

 const UserList = [
    {
        id: 1,
        name: "Agumon",
        username: "Agumon",
        level: "Rookie",
        type:"Reptile",
        attribute:"Vaccine",
        field: "DRAGONS_ROAR"
    },
    {
        id: 2,
        name: "Gabumon",
        username: "Gabumon",
        level: "Rookie",
        type: "Beast",
        attribute: "Data",
        field: "METAL_EMPIRE",
        friends: [
            {
                id: 1,
                name: "Agumon",
                username: "Agumon",
                level: "Rookie",
                type:"Reptile",
                attribute:"Vaccine",
                field: "DRAGONS_ROAR"
            }
        ]
    },
    {
        id: 3,
        name: "Gatomon",
        username: "Gatomon",
        level: "Champion",
        type: "Holy Beast",
        attribute: "Vaccine",
        field: "NATURE_SPIRITS",
        friends: [
            {
                id: 4,
                name: "Patamon",
                username: "Patamon",
                level: "Champion",
                type: "Holy Beast",
                attribute: "Vaccine",
                field: "DOMINICAN_REPUBLIC"
            }
        ]
    },
    {
        id: 4,
        name: "Patamon",
        username: "Patamon",
        level: "Champion",
        type: "Holy Beast",
        attribute: "Vaccine",
        field: "DOMINICAN_REPUBLIC",
        friends: [
            {
                id: 3,
                name: "Gatomon",
                username: "Gatomon",
                level: "Champion",
                type: "Holy Beast",
                attribute: "Vaccine",
                field: "NATURE_SPIRITS"
            },
        ]
    },
    {
        id: 5,
        name: "Palmon",
        username: "Palmon",
        level: "Champion",
        type:
        attribute:
        field: "DOMINICAN_REPUBLIC"
    },
]


module.exports = {UserList};