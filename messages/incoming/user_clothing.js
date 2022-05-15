

module.exports = class UserClothingEvent {

    static header = 1450;

    static Parse(client, packet) {
        let figureSetIds = [];
        let totalSetIds = packet.readInt();

        while(totalSetIds-- > 0) {
            figureSetIds.push(packet.readInt());
        }

        let boundFurnitureNames = [];
        let totalFurnitureNames = packet.readInt();

        while(totalFurnitureNames-- > 0) {
            boundFurnitureNames.push(packet.readString());
        }
        client.debug && console.log(figureSetIds, boundFurnitureNames);
    }

}