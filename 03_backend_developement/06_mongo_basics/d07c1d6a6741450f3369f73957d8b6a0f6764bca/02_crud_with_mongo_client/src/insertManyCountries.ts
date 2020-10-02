import * as mongo from "mongodb";

export function insertManyCountries(db : mongo.Db): Promise<Country> {

            const Countries = [{
              name: "blob",
              capital: "blab",
              continent: "Europe"
            
            },

            {
              name: "blob",
              capital: "blab",
              continent: "Europe"
            
            },

            {
              name: "blob",
              capital: "blab",
              continent: "Europe",
            
            }


          ]
  
  // code your function here
  return db.collection("worldAtlas")
  .insertMany(countries).then((writeOpResult) => {
    return writeOpResult.ops[0] 
})
}

