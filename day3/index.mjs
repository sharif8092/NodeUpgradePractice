import fs from "fs";

const getFile = (FileName)=> {
    return new Promise ((resolve,reject)=>{
        fs.readFile(FileName,(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data.toString());
            }
        })
    })
}

getFile("async.txt")
.then(data=>console.log(data))
.catch(err=>console.error(err));