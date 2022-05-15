

module.exports = class InitCameraEvent {

    static header = 3878;

    static Parse(client, packet) {
        let creditPrice = packet.readInt();
        let ducketPrice = packet.readInt();
        let publishDucketPrice = 0;

        if(packet.hasBytesAvailable()) publishDucketPrice = packet.readInt();
        client.debug && console.log(creditPrice, ducketPrice, publishDucketPrice);
    }

}