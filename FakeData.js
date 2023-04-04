// Generating fake data

 const DigimonList = [
    {
        id: 1,
        name: "Agumon",
        username: "Agumon",
        level: "Rookie",
        type:"Reptile",
        attribute:"Vaccine",
        field: "DRAGONS_ROAR",
        attacks:[
            {
                id: 1,
                name: "Baby flame",
                description: "",
                hp: -3,
                mp: -1
            },
            {
                id: 2,
                name: "Pepper Breath",
                description: "",
                hp: -10,
                mp: -5
            }


        ]
    },
    {
        id: 2,
        name: "Gabumon",
        username: "Gabumon",
        level: "Rookie",
        type: "Beast",
        attribute: "Data",
        field: "METAL_EMPIRE",
        attacks:[

        ],
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
                level: "Rookie",
                type: "Holy Beast",
                attribute: "Vaccine",
                field: "NATURE_SPIRITS"
            }
        ],
    },
    {
        id: 4,
        name: "Patamon",
        username: "Patamon",
        level: "Rookie",
        type: "Holy Beast",
        attribute: "Vaccine",
        field: "NATURE_SPIRITS",
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
        ],
        attacks:[
            {
                
                id: 3,
                name: "Air Shot",
                description: "",
                hp: -1,
                mp: -1
            }
        ]
    },
    {
        id: 5,
        name: "Palmon",
        username: "Palmon",
        level: "Rookie",
        type: "Mammal",
        attribute: "Data",
        field: "NATURE_SPIRITS"
    },
]


module.exports = {DigimonList};