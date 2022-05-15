

module.exports = class UnitChatEvent {

    static header = 1446;

    static Parse(client, packet) {
        let roomIndex = packet.readInt();
        let message = packet.readString();
        let gesture = packet.readInt();
        let bubble = packet.readInt();

        let urls = [];

        let totalUrls = packet.readInt();

        while(totalUrls-- > 0) {
            urls.push(packet.readString());
        }

        let messageLength = packet.readInt();
        client.debug && console.log(roomIndex, message, gesture, bubble, urls, messageLength);
        client.emit("unit-chat", {
            roomIndex,
            message,
            gesture,
            bubble,
            urls,
            messageLength
        });
    }

}