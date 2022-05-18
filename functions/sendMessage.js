let { HabbletClient } = require("habbletclient");

module.exports = async function SendMessage(message, timer, client) {
    if(timer) {
        timer = 1000 * timer;
    }
    if(!timer) {
        timer = 1000;
    }
    setTimeout(async () => {
        await client.sendRoomTalk(message)
    }, timer)
}