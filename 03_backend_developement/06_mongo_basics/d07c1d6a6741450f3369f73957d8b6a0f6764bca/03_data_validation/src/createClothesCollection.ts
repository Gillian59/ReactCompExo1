import * as mongo from "mongodb";





export const sweaterProperties = {
  // write your sweater properties here
};

export const shoesProperties = {
  // write your shoes properties here
};

export const pantsProperties = {
  // write your pants properties here
};

export const clothesValidator = {
  // write your validator here
};

export function createClothesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}


// required field _id which can be only an objectId
// required field name which can be only a string of 30 characters max
// required field color which can be only a string of 15 characters max
// required field category which can be only a string in: sweater, pants or shoes
// required field size: