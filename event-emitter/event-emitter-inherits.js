//"use strict"

var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');



function InputChecker(name, file){
    this.name = name;
    this.writeStream = fs.createWriteStream('./'+file+'.txt', {
        flags:'a', //O arquivo é criado se não existir
        enconding: 'utf8'
    });
}


util.inherits(InputChecker, eventEmitter); //realiza a extão de eventEmitter para InputChecker

InputChecker.prototype.check = function(input ){
    var comando = input.trim().substr(0,3);


    if (comando === "wr:"){
        this.emit('write', input.trim().substr(3, input.length - 1));
    }else if(comando === "en:"){
        this.emit('end');
    }else{
        this.emit('echo', input);
    }
}

inputCheck = new InputChecker("João", "saida");

inputCheck.on('write', function(data){
    this.writeStream.write(data, 'utf8');
});

inputCheck.on('echo', function(data){
    process.stdout.write(inputCheck.name + ' escreveu ' + data);
});

inputCheck.on('end', function(){
    process.exit();
})


process.stdin.setEncoding('utf8');
process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null){
        inputCheck.check(input);
    }
})



