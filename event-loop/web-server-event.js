/**
 *  Servidor web básico com destaque para alguns eventos: 
 *      request;
 *      connection
 *      listening
 */

const http = require("http");
const server = http.createServer();

server.on("request", function(req, res){
    console.log("Request event");
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    res.end("Request foi");
})

server.on("connection", function(){
    console.log("Connection event");
})

server.listen(3000, function(){
    console.log("listening event");
})

console.log("Listening 3000");