let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escolha um: | system.js | akinator.js |>  ", answer => {
    let list = [
        'system.js',
        'akinator.js'
    ]
    if(answer === list[0]){
        const main = require('./free.js')
        main.run()
    } else if(answer === list[1]){
        const aki = require('./akinator.js')
        aki.run()
    } else if(answer !== list[0] || answer !== list[1]){
        process.exit()
    }
})