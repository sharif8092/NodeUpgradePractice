var fs = require('fs');

 function writeFileSystem(filename,line){
         fs.writeFile(filename,line, err=>{
            if(err){
                throw err ;
            }
         });

}

 function readFileSystem(filename){
       fs.readFile(filename,'utf8', (err,data)=>{
        if(err){
            throw err ;
        }else{
            console.log(data);
        }
       })
}

  function appendFileSystem(filename){
        fs.appendFile(filename,line,err=>{
            if(err){
                throw err;
            }
        })
}

module.exports= {
     writeFileSystem,
     readFileSystem,
     appendFileSystem
}