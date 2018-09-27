/**
 * Cria um simples servidor http, 
 * onde o content-type do header do response recebe text/plain como valor
 * e completando a mensagem com res.end, exibindo na tela Hello World;
 */


const http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
}).listen(4000, function(){
    console.log("Server running at http://localhost:4000")
});