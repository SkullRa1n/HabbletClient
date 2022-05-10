

module.exports = class SecutiryMachineEvent {

    static header = 1488;

    static Parse(client, packet) {
        let machineId = packet.readString();
        client.debug && console.log(machineId);
    }

}