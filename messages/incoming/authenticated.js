

module.exports = class AuthenticatedEvent {

    static header = 2491;

    static Parse(client, packet) {
        client.authenticated = true;
        client.emit("authenticated");
        client.debug && console.log("Authenticated");
    }

}