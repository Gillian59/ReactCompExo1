import * as mongo from "mongodb";



export const booksValidator = {
  // write your validator here
   validator: {
      $jsonSchema: {
        bsonType: "object",
      required: ["_id", "title", "author", "description"],
      _id: "object",
      title: "string",
      author: "string",
      
      description: "string",
      }
    }
  }  



export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("books", booksValidator);
}


// required field _id which can be only an objectId
// required field title which can be only a string
// required field author which can be only a string
// required field description which can be only a string of 100 characters max

// yarn test --verbose createBooksCollection