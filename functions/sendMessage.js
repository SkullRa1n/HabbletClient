let { HabbletClient } = require("habbletclient");

async function send(message, timer, client) {
    if(timer) {
        timer = 1000 * timer;
    }
    if(!timer) {
        timer = 1000;
    }
    setTimeout(async () => {
        console.log('a')
        HabbletClient.sendRoomTalk(message)
    }, timer)
}
module.exports.send = send;