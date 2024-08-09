// Http module 
const http = require("http");
const path = require("path");
const fs = require("fs");
const {Transform} = require("stream");
const stringify = require("csv-stringify")
const csv = require("csv-parse")

/*


http.createServer((req,res)=>{
     res.writeHead(200,{'content-type':'text/html'})
     res.end("hello world ")
}).listen(8080);

// path module 

const viewPath = path.parse("C:\\Users\\shari\\OneDrive\\Documents\\P(Project)\\NodeUpgradePractice\\NodeUpgradePractice\\day6\\index.js");
console.log(viewPath);

// console.log(viewPath.root);


const createpathFormat = path.format({dir:"/home/user/shark",   base:"text.txt"})
console.log(createpathFormat);


// --------Stram -----------
// createReadStream:
// Creates a readable stream for a file.
// Reads the file in chunks, making it efficient for handling larger files.
// Consumes less memory overall.





const stream = fs.createReadStream("largeFile.txt");

stream.on('data',(data)=>{
     let chunk = data.toString();
     console.log(chunk);
})

let writedata = fs.createWriteStream("createData.txt");

writedata.write("line 1 \n");
writedata.write("line 2 \n");
writedata.write("line 3 \n");       

*/

const readFileStream = fs.createReadStream('largeFile.txt');
const writeFileStream = fs.createWriteStream('createData.txt');
const trans = new Transform({
     transform(chunk,encoding,callback){
          callback(null , chunk.toString().toUpperCase());
     }
})

readFileStream.pipe(trans).pipe(writeFileStream);


const readCSVfile = fs.createReadStream('people-100.csv');

readCSVfile.pipe(csv.parse({delimiter:","}))
.on("data" , (row)=>{
     // console.log(row[0]);
})

// How to write csv file 

const writeStringifyFile = fs.createWriteStream('Text.csv');
const data = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
const columns = ["num1", "num2", "num3"];

const stringifier = stringify.stringify({header:true, columns:columns });

for (let i=0; i<data.length; i++ ){
     stringifier.write(data[i]);
}

stringifier.pipe(writeFileStream);