"use strict";

const util = require('util');
const eventEmitter = require('events').EventEmitter;
const fs = require('fs');

function InputChecker(name, file){
    this.name = name;
    this.writeStream = fs.createWriteStream('./'+file+'.txt', {
        flags:'a', //O arquivo é criado se não existir
        enconding: 'utf8',
        mode: 0o666
    });
}

util.inherits(InputChecker, eventEmitter); //realiza a extão de eventEmitter para InputChecker

InputChecker.prototype.check = function(input ){
    var comando = input.trim().substr(0,3);
    console.log(comando);
}

const check = new InputChecker('Joao', 'joia');
check.check("wr:tudo bem ");