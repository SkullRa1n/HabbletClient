

module.exports = class BuildersClubSubscriptionEvent {

    static header = 1452;

    static Parse(client, packet) {
        let Str_16456 = packet.readInt();
        let Str_12494 = packet.readInt();
        let Str_19123 = packet.readInt();
        let Str_17298;

        if(packet.hasBytesAvailable()) Str_17298 = packet.readInt();
        else Str_17298 = Str_16456;
        client.debug && console.log("Builders Club subscription: " + Str_16456 + " " + Str_12494 + " " + Str_19123 + " " + Str_17298);
    }

}