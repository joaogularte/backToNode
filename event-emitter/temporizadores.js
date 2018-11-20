
/*
var timer1 = setTimeout(function(name){
    console.log('Hello ' + name);
}, 30000, 'Joao')


console.log("Espere um tempo");

setTimeout(function(timer){
    clearTimeout(timer);
    console.log("Timer limpado");
}, 3000, timer1);

*/

var intervalo = setInterval(function(data){
    console.log(data);
}, 1000, 'Joao');

//
//setTimeout(function(data){
//    clearTimeout(data);
//    console.log('Limpado');
//}, 30000, intervalo);
