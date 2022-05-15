

module.exports = class UserInfoEvent {

    static header = 2725;

    static Parse(client, packet) {
        let userInfo = {
            userId: packet.readInt(),
            username: packet.readString(),
            figure: packet.readString(),
            gender: packet.readString(),
            motto: packet.readString(),
            realName: packet.readString(),
            directMail: packet.readBoolean(),
            respectsReceived: packet.readInt(),
            respectsRemaining: packet.readInt(),
            respectsPetRemaining: packet.readInt(),
            streamPublishingAllowed: packet.readBoolean(),
            lastAccessDate: packet.readString(),
            canChangeName: packet.readBoolean(),
            safetyLocked: packet.readBoolean()
        }
        client.debug && console.log(userInfo);
    }

}