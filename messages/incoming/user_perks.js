

module.exports = class UserPerksEvent {

    static header = 2586;

    static Parse(client, packet) {
        let perks = [];

        let size = packet.readInt();
        while (size-- > 0) {
            perks.push({
                code: packet.readString(),
                erroMessage: packet.readString(),
                isAllowed: packet.readBoolean()
            });
        }
        client.debug && console.log(perks);
    }

}