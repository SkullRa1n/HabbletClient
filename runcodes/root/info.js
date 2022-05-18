let { HabbletClient, Room } = require("habbletclient");
let path = require('path')
const msg = require(`${path.join(__dirname, `../../functions/sendMessage.js`)}`)

module.exports = {
    aliases: [ 'info', 'sobre'], // Aliases do comando
    run: async (chatMessage, client, args, answer) => {
        let user = Room.getUnitByRoomIndex(chatMessage.roomIndex)
        console.log(msg)
          await msg.send(`Bem vindo ${user.name}, à tela de informações`, 0, client);
          await msg.send(`Sou um selfbot e não um bot!`, 1, client);
          await msg.send(`Bot é um robô sem vida`, 2, client);
          await msg.send(`Selfbot é um player com script/cheat!`, 3, client);
          await msg.send(`Não kkk, Não estou aqui para floodar`, 4, client);
          await msg.send(`Fui editado pela equipe SkullRa1n for u fun`, 5, client);
          await msg.send(`Nick do criador: CoreDuo`, 6, client);
          await msg.send(`Nick deste bot melhorado: M0rthifxr | Frost.Miller`, 7, client);
          await msg.send(`Não fui criado para floodar ou atrapalhar!`, 8, client);
    }
}