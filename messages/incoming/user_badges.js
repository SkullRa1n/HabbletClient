

module.exports = class UserBadgesEvent {

    static header = 717;

    static Parse(client, packet) {
        let allBadgeCodes = [];
        let activeBadgeCodes = {};
        let badgeIds = {};

        let count = packet.readInt();

        while (count-- > 0) {
            const badgeId = packet.readInt();
            const badgeCode = packet.readString();

            badgeIds[badgeCode] = badgeId;

            allBadgeCodes.push(badgeCode);
        }

        count = packet.readInt();

        while (count-- > 0) {
            const badgeSlot = packet.readInt();
            const badgeCode = packet.readString();

            activeBadgeCodes[badgeCode] = badgeSlot;
        }
        client.debug && console.log(allBadgeCodes, activeBadgeCodes, badgeIds);
    }

}