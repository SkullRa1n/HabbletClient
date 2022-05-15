

module.exports = class MessengerInitEvent {

    static header = 1605;

    static Parse(client, packet) {
        let userFriendLimit = packet.readInt();
        let normalFriendLimit = packet.readInt();
        let extendedFriendLimit = packet.readInt();

        let totalCategories = packet.readInt();
        let categories = [];

        while (totalCategories-- > 0) {
            categories.push({
                id: packet.readInt(),
                name: packet.readString()
            });
        }
        client.debug && console.log(userFriendLimit, normalFriendLimit, extendedFriendLimit, totalCategories, categories);
    }

}