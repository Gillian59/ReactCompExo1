import * as mongo from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;

}

export function findOneCountry(db : mongo.Db): Promise<Country> {
  // code your function here
  return db.collection("worldAtlas").findOne({ name: "Iceland"})
 
}

  //db.collection("users")
  //.findOne({ firstName: "Frida" })
  //.then((doc) => {
  //  console.log(doc);
  //  client.close();
  //});
