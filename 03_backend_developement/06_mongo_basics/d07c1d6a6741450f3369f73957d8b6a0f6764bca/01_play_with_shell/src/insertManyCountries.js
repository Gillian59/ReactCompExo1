/* global db */

// write your MongoDB shell command here
const newPays = [ 
    { 
    name: "Allemagne", 
    capital: "Berlin", 
    continent: "Europe",
    } ,

    { 
    name: "Chine", 
    capital: "Pékin", 
    continent: "Asie",
    },

    { 
    name: "Mexique",
    capital: "Mexico",
    continent: "Amérique du Nord",
    }
]

db.worldAtlas.insertMany(newPays)
