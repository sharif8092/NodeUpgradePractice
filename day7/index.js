const repl = require("repl");
const readline = require("readline")

repl.start(); // you can use js through command line 


const rd = readline.createInterface(process.stdin , process.stdout);

rd.question("what is your Nama bidu??", (name)=>{
    // console.log("My name is " + name );
    rd.write("your name is "+ name );

    rd.close();
    
})




