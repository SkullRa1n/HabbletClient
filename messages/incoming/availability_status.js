

module.exports = class AvailabilityStatusEvent {

    static header = 2033;

    static Parse(client, packet) {
        let isOpen = packet.readBoolean();
        let onShutdown = packet.readBoolean();
        let isAuthenticUser = false;

        if(packet.hasBytesAvailable()) {
            isAuthenticUser = packet.readBoolean();
        }
        client.debug && console.log(isOpen, onShutdown, isAuthenticUser);
    }

}