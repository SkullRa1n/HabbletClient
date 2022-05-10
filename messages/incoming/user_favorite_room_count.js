

module.exports = class UserFavoriteRoomCountEvent {

    static header = 151;

    static Parse(client, packet) {
        let maxRooms = packet.readInt();
        let count = packet.readInt();
        while(count-- > 0) {
            client.favoriteRooms.push(packet.readInt());
        }
        client.debug && console.log(client.favoriteRooms);
    }

}