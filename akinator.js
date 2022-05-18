const { Aki } = require('aki-api');
let { HabbletClient } = require("habbletclient");
const config = require("./config.json");
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const region = 'pt';
const childMode = true;
let aki;
let status = "offline";

module.exports = {
    run: async () => {
        rl.question("Sso.Ticket: ", answer => {
            let client = new HabbletClient(answer);
            client.debug = true;
            client.on("connection-open", () => {
                client.authenticate();
            });

            function ask() {
                client.sendRoomTalk(aki.question);
                // client.sendRoomTalk("0 = Sim, 1 = Não, 2 = Não sei, 3 = Provavelmente sim, 4 = Provavelmente não");
                client.sendRoomTalk("Progresso: " + aki.progress + "%");
            }

            client.on("authenticated", () => {
                setTimeout(() => {
                    console.log("Entering room...");
                    client.enterRoom(config.roomid);
                }, 100);
            });

            client.on("unit-chat", async chatMessage => {
                if(chatMessage.message.startsWith(":aki-status")) {
                    client.sendRoomTalk("Status: " + status);
                }else if(chatMessage.message.startsWith(":aki-stop")) {
                    aki = null;
                    status = "offline";
                }else if(chatMessage.message.startsWith(":aki")) {
                    if(status == "offline") {
                        client.sendRoomTalk("Iniciando, aguarde...");
                        aki = new Aki({ region, childMode });
                        status = "starting";
                        aki.start().then(() => {
                            status = "ready";
                            ask();
                        }).catch(console.error);
                    }else if(status == "starting") {
                        client.sendRoomTalk("Ainda estou iniciando...");
                    }else if(status == "asking") {
                        client.sendRoomTalk("Estou processando sua resposta...");
                    }else if(status == "ready") {
                        const answers = aki.answers.map(answer => answer.toLowerCase());
                        let answer = chatMessage.message.replace(":aki ", "").toLowerCase();
                        if(answers.includes(answer)) {
                            status = "asking";
                            await aki.step(answers.indexOf(answer));
                            if (aki.progress >= 70 || aki.currentStep >= 78) {
                                await aki.win();
                                console.log(aki.answers[0]);
                                client.sendRoomTalk(aki.answers[0].name);
                                client.sendRoomTalk("Total de acertos: " + aki.guessCount);
                                status = "offline";
                            }else {
                                status = "ready";
                                ask();
                            }
                        }else {
                            client.sendRoomTalk("Resposta inexistente!");
                        }
                    }
                }
            });
        });
    }
}