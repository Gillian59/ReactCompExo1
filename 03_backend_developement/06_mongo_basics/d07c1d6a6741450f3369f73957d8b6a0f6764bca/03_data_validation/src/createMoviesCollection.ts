import * as mongo from "mongodb";

export const moviesValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["_id", "title", "genre", "year", "ratings"],
      properties: {
        id: {
          bsonType: "object",
        },
        title: {
          bsonType: "string",
       },
        genre: {
          bsonType: "string",
        },
        year: {
          bsonType: "int",
          description: "can be only a integer between 1950 and 2020",
        },

        ratings:{
          bsonType: "objet",
          description : "can be only an object with two fields",

        
          properties:{
                              pressRatings:{
                                bsonType: "int",
                                description: "can be only an integer between 1 and 5",

                              },

                              spectatorsRating:{
                                bsonType: "int",
                                description: "can be only an integer between 1 and 5",

                              },
                        }
                      }

  
         }
    }
},
}



export function createMoviesCollection(
  db: mongo.Db): Promise<mongo.Collection> {
  
  return db.createCollection("movies", moviesValidator);
}



// required field _id which can be only an objectId
// required field title which can be only a string
// required field genre which can be only a string in: action, comedy, dramatic, horror or romance
// required fieldyear which can be only a integer between 1950 and 2020
// optional field ratings which can be only an object with two fields:
// required field pressRating which can be only an integer between 1 and 5
// required field spectatorsRating which can be only an integer between 1 and 5


//yarn test --verbose createMoviesCollection