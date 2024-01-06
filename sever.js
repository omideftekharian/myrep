//Import
const { error } = require('console');
const http = require('http');

function Repository(req,res){
    res.statusCode = 200;
    res.write('Hello World');
    res.end();
}
const server = http.createServer(Repository)

function consoleprinter(){
    console.log("Success")
}

server.listen(3000,'localhost',consoleprinter)