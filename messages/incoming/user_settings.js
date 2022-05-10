

module.exports = class UserSettingsEvent {

    static header = 513;

    static Parse(client, packet) {
        let volumeSystem = packet.readInt();
        let volumeFurni = packet.readInt();
        let volumeTrax = packet.readInt();
        let oldChat = packet.readBoolean();
        let roomInvites = packet.readBoolean();
        let cameraFollow = packet.readBoolean();
        let flags = packet.readInt();
        let chatType = packet.readInt();
        client.debug && console.log(volumeSystem, volumeFurni, volumeTrax, oldChat, roomInvites, cameraFollow, flags, chatType);
    }

}