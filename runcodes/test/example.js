let HabbletClient = require("../../habblet_client");

module.exports = {
    aliases: [ 'test', 'testi'], // Aliases do comando
    run: async (chatMessage, client, args, answer) => {
        if(!args[0]) return client.sendRoomTalk(`ERRO! Precisamos de argumentos!`)
        client.sendRoomTalk(`Veremos aqui...\n${args[0]}?\n\nSerio?`);
        console.log(client.UserInfo)
    }
}