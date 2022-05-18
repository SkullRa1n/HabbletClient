let { HabbletClient, Room } = require("habbletclient");
let path = require('path')
const SendMessage = require(`../../functions/sendMessage.js`)

module.exports = {
    aliases: [ 'info', 'sobre'], // Aliases do comando
    run: async (chatMessage, client, args, answer, SendMessage) => {
        let user = Room.getUnitByRoomIndex(chatMessage.roomIndex)
        console.log(SendMessage)
          await SendMessage(`Bem vindo ${user.name}, à tela de informações`, client);
          await SendMessage(`Sou um selfbot e não um bot!`, 1, client);
          await SendMessage(`Bot é um robô sem vida`, 2, client);
          await SendMessage(`Selfbot é um player com script/cheat!`, 3, client);
          await SendMessage(`Não kkk, Não estou aqui para floodar`, 4, client);
          await SendMessage(`Fui editado pela equipe SkullRa1n for u fun`, 5, client);
          await SendMessage(`Nick do criador: CoreDuo`, 6, client);
          await SendMessage(`Nick deste bot melhorado: M0rthifxr | Frost.Miller`, 7, client);
          await SendMessage(`Não fui criado para floodar ou atrapalhar!`, 8, client);
    }
}