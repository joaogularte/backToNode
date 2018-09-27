/**
 * O Codigo abaixo exemplifica os canais de fluxo comunicação de dados:
 *      stdin: fluxo de leitura.
 *      stdout: fluxo de escrita
 */

process.stdin.setEncoding('utf8');
process.stdin.on('readable', function(){
    let input = process.stdin.read();
    if(input !== null){
        process.stdout.write(input);
        let command = input.trim();
        if(command == 'exit') process.exit();
    }
});