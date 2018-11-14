var eventEmitter = require('events').EventEmitter;
var cont = 0;

var em = new eventEmitter();


setInterval(function(){
    em.emit('timed', cont++);
}, 3000);

em.on('timed', function(data){
    console.log(data);
})