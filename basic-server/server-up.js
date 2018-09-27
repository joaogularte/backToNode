/**
 *
 * 
 * 
 *  
 */

const http = require('http');
const fs = require('fs');
console.log(global);

http.createServer(function(req, res){
    let name = require('url').parse(req.url, true).query.name;

    if(name === undefined) name = 'world';

    if(name == 'oloco'){
        let file = 'faust-silva.jpg';
        fs.stat(file, function(err, stat){
            if(err){
                res.writeHead(220, {
                    'Content-Type':'text/plain'
                });
                res.end('No fausto silva');
            }else{
                let img = fs.readFileSync(file);
                res.writeHead(200, {
                    'Content-Type': 'image/jpg',
                    'Content-Length': stat.size
                });              
                res.end(img, 'binary');
            }
        });
    }else{
        res.writeHead(200,{'Content-Type': 'image/jpg'});
        res.end('Olá ' + name);
    }
}).listen(3000);