import { rejects } from "assert";
import * as fs from "fs";
import * as path from "path";
import { resolve } from "path";


const fileName = "gba.json";
const filePath = path.resolve(`data/${fileName}`);
const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
const platform = JSON.parse(stringifiedPlatform);



function readData(data: "string"): Promise<string> {
    const dataPlatform = platform.forEach([]);
    return dataPlatform(data); 
    console.log(dataPlatform);  

}

readData(data);