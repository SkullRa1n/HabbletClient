

module.exports = class MessengerRequestsEvent {

    static header = 280;

    static Parse(client, packet) {
        let totalRequests = packet.readInt();
        let requests = [];

        let requestsCount = packet.readInt();

        while(requestsCount-- > 0) {
            requests.push({
                requesterUserId: wrapper.readInt(),
                requesterName: wrapper.readString(),
                figureString: wrapper.readString()
            });
        }
        client.debug && console.log(totalRequests, requests);
    }

}