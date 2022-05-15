

module.exports = class UserAchievementScoreEvent {

    static header = 1968;

    static Parse(client, packet) {
        let score = packet.readInt();
        client.debug && console.log(score);
    }

}