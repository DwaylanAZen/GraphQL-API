// Generating fake data

 const UserList = [
    {
        id: 1,
        name: "Ru",
        username: "Roop Paul",
        age: 75,
        nationality: "UNITED_STATES"
    },
    {
        id: 2,
        name: "Pangina",
        username: "Pangina Heels",
        age: 32,
        nationality: "PHILIPPINES"
    },
    {
        id: 3,
        name: "Candy",
        username: "Candy Muse",
        age: 27,
        nationality: "DOMINICAN_REPUBLIC"
    },
    {
        id: 4,
        name: "Trixie",
        username: "Trixie Mattel",
        age: 35,
        nationality: "UNITED_STATES",
        friends: [
            {
                id: 8,
                name: "Katya",
                username: "Katya Zomolodchikova",
                age: 35,
                nationality: "RUSSIA"
            },
        ]
    },
    {
        id: 5,
        name: "Bianca",
        username: "Bianca Del Rio",
        age: 37,
        nationality: "UNITED_STATES",
        friends: [   
            {
            id: 7,
            name: "Adore",
            username: "Adore Delano",
            age: 20,
            nationality: "UNITED_STATES"
        },
    ]
    },
    {
        id: 6,
        name: "Rose",
        username: "Rose",
        age: 25,
        nationality: "IRELAND"
    },
    {
        id: 7,
        name: "Adore",
        username: "Adore Delano",
        age: 20,
        nationality: "UNITED_STATES",
        friends: [
            {
                id: 5,
                name: "Bianca",
                username: "Bianca Del Rio",
                age: 37,
                nationality: "UNITED_STATES", 
            }
        ]
    },
    {
        id: 8,
        name: "Katya",
        username: "Katya Zomolodchikova",
        age: 35,
        nationality: "RUSSIA",
        friends: [
            {
                name: "Trixie",
                username: "Trixie Mattel",
                age: 35,
                nationality: "UNITED_STATES"
            }
        ]
    },
]


module.exports = {UserList};