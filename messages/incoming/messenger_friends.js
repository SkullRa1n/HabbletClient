

module.exports = class MessengerFriendsEvent {

    static header = 3130;

    static Parse(client, packet) {
        let totalFragments = packet.readInt();
        let fragmentNumber = packet.readInt();
        let fragment = [];

        let totalFriends = packet.readInt();

        while(totalFriends-- > 0) {
            fragment.push({
                id: packet.readInt(),
                name: packet.readString(),
                gender: packet.readInt(),
                online: packet.readBoolean(),
                followingAllowed: packet.readBoolean(),
                figure: packet.readString(),
                categoryId: packet.readInt(),
                motto: packet.readString(),
                realName: packet.readString(),
                lastAccess: packet.readString(),
                persistedMessageUser: packet.readBoolean(),
                vipMember: packet.readBoolean(),
                pocketHabboUser: packet.readBoolean(),
                relationshipStatus: packet.readShort(),
            });
        }
        client.debug && console.log(totalFragments, fragmentNumber, fragment);
    }

}