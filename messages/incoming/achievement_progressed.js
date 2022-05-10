

module.exports = class AchievementProgressedEvent {

    static header = 2107;

    static Parse(client, packet) {
        let achievement = {
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
        }
        client.debug && console.log(achievement);
    }

}