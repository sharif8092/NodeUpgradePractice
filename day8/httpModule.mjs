import http from "http";
import url from "url";


http.createServer(function(req,res){
    res.writeHead(200,{"content-type" : "text/html" })
    res.write("Hello Node http module");
    res.end();

}).listen(80);