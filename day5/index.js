// import { readFileSystem, writeFileSystem,uppendFileSystem } from "./fileSystem";
const readFileSystem = require("./fileSystem");
const writeFileSystem = require("./fileSystem");
const appendFileSystem = require("./fileSystem");
const fs = require("fs")



writeFileSystem("shark.txt", "Hey shark this is nodeJs fileSystem module\n ")

// writeLogLine("log.txt", "test line\n");
readFileSystem("shark.txt");
appendFileSystem("log.txt", "second line\n");
// readLogFile("log.txt");