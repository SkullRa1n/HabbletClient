

module.exports = class BadgePointLimitEvent {

    static header = 2501;

    static Parse(client, packet) {
        let _data = [];
        let _local_2 = packet.readInt();

        while(_local_2-- > 0)
        {
            const _local_4 = packet.readString();
            const _local_5 = packet.readInt();

            let _local_6 = 0;

            while(_local_6 < _local_5){
                _data.push({
                    badgeId: (('ACH_' + _local_4) + packet.readInt()),
                    limit: packet.readInt()
                });

                _local_6++;
            }
        }
        client.debug && console.log(_data);
    }

}