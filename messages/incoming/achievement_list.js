

module.exports = class AchievementListEvent {

    static header = 305;

    static Parse(client, packet) {
        let achievements = [];

        let totalCount = packet.readInt();

        while(totalCount-- > 0) {
            achievements.push({
                achievementId: packet.readInt(),
                level: packet.readInt(),
                badgeId: packet.readString(),
                scoreAtStartOfLevel: packet.readInt(),
                scoreLimit: Math.max(1, packet.readInt()),
                levelRewardPoints: packet.readInt(),
                levelRewardPointType: packet.readInt(),
                currentPoints: packet.readInt(),
                finalLevel: packet.readBoolean(),
                category: packet.readString(),
                subCategory: packet.readString(),
                levelCount: packet.readInt(),
                displayMethod: packet.readInt()
            });
        }

        let defaultCategory = packet.readString();
        client.debug && console.log(defaultCategory, achievements);
    }

}