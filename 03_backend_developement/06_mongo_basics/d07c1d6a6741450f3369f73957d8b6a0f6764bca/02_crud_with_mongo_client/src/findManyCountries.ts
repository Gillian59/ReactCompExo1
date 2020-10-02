import * as mongo from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;

}

export function findManyCountries(db : mongo.Db): Promise<Country[]> {
  // code your function here
  return db
  .collection("worldAtlas")
  .find({ continent: "Europe"})
  .toArray();
}



