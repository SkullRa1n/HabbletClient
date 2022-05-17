let HabbletClient = require("../../habblet_client");

module.exports = {
    aliases: [ 'malvadão', 'malvapobre'], // Aliases do comando
    run: async (chatMessage, client, args, answer) => {
        client.sendRoomTalk(`Nunca viajo de avião`);
        setTimeout(() => {
            client.sendRoomTalk(`Mó probreza`);
        }, 1000)
        setTimeout(() => {
            client.sendRoomTalk(`Só busão`);
        }, 2000)
        setTimeout(() => {
            client.sendRoomTalk(`Abaixa o valor da passagem irmão`);
        }, 3000)
        setTimeout(() => {
            client.sendRoomTalk(`Ohhhhh oh`);
        }, 4000)
        setTimeout(() => {
            client.sendRoomTalk(`Eu sou pobre mesmo`);
        }, 5000)
        setTimeout(() => {
            client.sendRoomTalk(`Sem um tostão`);
        }, 6000)
        setTimeout(() => {
            client.sendRoomTalk(`Tô devendo a moça do pão`);
        }, 7000)
        setTimeout(() => {
            client.sendRoomTalk(`10 agiota no meu portão`);
        }, 8000)
        setTimeout(() => {
            client.sendRoomTalk(`Lascou!`);
        }, 9000)
        setTimeout(() => {
            client.sendRoomTalk(`By: M0rthifxr | Tina.Miller`);
        }, 10000)
    }
}