

module.exports = class UserCreditsEvent {

    static header = 3475;

    static Parse(client, packet) {
        let credits = packet.readString();
        client.debug && console.log("User credits: " + credits);
    }

}