import * as mongo from "mongodb";


export function insertOneCountry(db : mongo.Db): Promise<Country> {

  const Country = {
    name: "blob",
    capital: "blab",
    continent: "Europe",
  
  }
  
  // code your function here
  return db.collection("worldAtlas")
  .insertOne(country).then((result) => {
    return result.ops[0] 
})
}





