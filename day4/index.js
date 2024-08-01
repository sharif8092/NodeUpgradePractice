// Here we learn async and await 

import fs from "fs";

const file = async function (fileName){
    let data = fs.promises.readFile(fileName)
    return (await data).toString();
}


const result = await file("async.txt")

console.log(result);