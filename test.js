const { Aki } = require('aki-api');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function ask() {
    return new Promise(resolve => {
        rl.question('> ', answer => {
            resolve(answer);
        });
    })
}

const region = 'pt';
const childMode = true;
const aki = new Aki({ region, childMode });
const run = async () => {
    console.log('question:', aki.question);
    console.log('answers:', aki.answers);
    console.log('progress:', aki.progress);

    await aki.step(await ask());

    if (aki.progress >= 70 || aki.currentStep >= 78) {
      await aki.win();
      console.log('firstGuess:', aki.answers[0]);
      console.log('guessCount:', aki.guessCount);
    }else {
        await run();
    }
}

aki.start().then(run).catch(console.error);