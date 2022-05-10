

module.exports = class UserPermissionsEvent {

    static header = 411;

    static Parse(client, packet) {
        let clubLevel = packet.readInt();
        let securityLevel = packet.readInt();
        let isAmbassador = packet.readBoolean();
        client.debug && console.log(clubLevel, securityLevel, isAmbassador);
    }

}