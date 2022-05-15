

module.exports = class UserCurrencyEvent {

    static header = 2018;

    static Parse(client, packet) {
        let currencies = {};
        let totalCurrencies = packet.readInt();

        while(totalCurrencies-- > 0){
            currencies[packet.readInt()] = packet.readInt();
        }
        client.debug && console.log(currencies);
    }

}