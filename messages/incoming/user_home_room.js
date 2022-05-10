

module.exports = class UserHomeRoomEvent {

    static header = 2875;

    static Parse(client, packet) {
        let homeRoomId = packet.readInt();
        let roomIdToEnter = packet.readInt();
        client.debug && console.log(homeRoomId, roomIdToEnter);
    }

}