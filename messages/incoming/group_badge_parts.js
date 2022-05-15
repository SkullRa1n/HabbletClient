

module.exports = class GroupBadgePartsEvent {

    static header = 2238;

    static Parse(client, packet) {
        let basesCount = packet.readInt();
        let bases = {};
        let symbols = {};
        let partColors = {};
        let colorsA = {};
        let colorsB = {};
        
        while (basesCount-- > 0) {
            const id = packet.readInt();
            const valueA = packet.readString();
            const valueB = packet.readString();

            bases[id] = [valueA, valueB];
        }

        let symbolsCount = packet.readInt();

        while (symbolsCount-- > 0) {
            const id = packet.readInt();
            const valueA = packet.readString();
            const valueB = packet.readString();

            symbols[id] = [valueA, valueB];
        }

        let partColorsCount = packet.readInt();

        while (partColorsCount-- > 0) {
            const id = packet.readInt();
            const color = packet.readString();

            partColors[id] = color;
        }

        let colorsACount = packet.readInt();

        while (colorsACount-- > 0) {
            const id = packet.readInt();
            const color = packet.readString();

            colorsA[id] = color;
        }

        let colorsBCount = packet.readInt();

        while (colorsBCount-- > 0) {
            const id = packet.readInt();
            const color = packet.readString();

            colorsB[id] = color;
        }
        client.debug && console.log(bases, symbols, partColors, colorsA, colorsB);
    }

}