var fib = function(n){
    if(n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

const Obj = function(){ };

Obj.prototype.facaAlgo =  function(arg1_){
    let callback_ = arguments[arguments.length - 1];
    callback = (typeof(callback_) == 'function' ? callback_ : null);
    let arg1 = typeof(arg1_) === 'number' ? arg1_ : null;
    if(!arg1){
        return callback(new Error("Primeiro arg faltando ou nao eh numero"))
    }
    
    process.nextTick(function(){
        let data = fib(arg1)
        callback(null, data)
    })
        
}

let obj = new Obj();
var number = 40;

obj.facaAlgo(number, function(err, value){
    if(err){
        console.log(err)
    }else{
        console.log(value);
    }
})

console.log("facaAlgo() chamado");