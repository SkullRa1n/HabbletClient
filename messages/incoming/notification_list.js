

module.exports = class NotificationListEvent {

    static header = 1992;

    static Parse(client, packet) {
        let type = packet.readString();
        let totalParameters = packet.readInt();
        let parameters = {};

        while(totalParameters-- > 0){
            parameters[packet.readString()] = packet.readString();
        }
        client.debug && console.log(type, parameters);
    }

}