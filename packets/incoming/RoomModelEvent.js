let RoomDoorSettingsComposer = require("../outgoing/RoomDoorSettingsComposer");
let RoomBlockedTilesComposer = require("../outgoing/RoomBlockedTilesComposer");

let RoomPlaneParser = {
	FLOOR_THICKNESS: 0.25,
    WALL_THICKNESS: 0.25,
    MAX_WALL_ADDITIONAL_HEIGHT: 20,
    TILE_BLOCKED: -110,
    TILE_HOLE: -100,
}

class RoomModelEvent {

	Parse(packet, client){

		let scale = packet.readBoolean();
		let wallHeight = packet.readInt();
		let model = packet.readString();

		let data = this.parseExplicitly(model, wallHeight, scale);

		client.Connection.send(new RoomDoorSettingsComposer().compose());
		client.Connection.send(new RoomBlockedTilesComposer().compose());

	}

	parseExplicitly(modelString, wallHeight, scale = true){
		let data = {}
        data.scale         = scale ? 32 : 64;
        data.wallHeight    = wallHeight;
        data.model         = modelString;

        const model     = data.model.split('\r');
        const modelRows = model.length;

        let width   = 0;
        const height  = 0;

        let iterator = 0;

        while(iterator < modelRows)
        {
            const row = model[iterator];

            if(row.length > width)
            {
                width = row.length;
            }

            iterator++;
        }

        data.heightMap = [];
        iterator        = 0;

        while(iterator < modelRows)
        {
            const heightMap = [];

            let subIterator = 0;

            while(subIterator < width)
            {
                heightMap.push(RoomPlaneParser.TILE_BLOCKED);

                subIterator++;
            }

            data.heightMap.push(heightMap);

            iterator++;
        }

        data.width     = width;
        data.height    = modelRows;

        iterator = 0;

        while(iterator < modelRows)
        {
            const heightMap = data.heightMap[iterator];
            const text      = model[iterator];

            if(text.length > 0)
            {
                let subIterator = 0;

                while(subIterator < text.length)
                {
                    const char  = text.charAt(subIterator);
                    let height  = RoomPlaneParser.TILE_BLOCKED;

                    if((char !== 'x') && (char !== 'X')) height = parseInt(char, 36);

                    heightMap[subIterator] = height;

                    subIterator++;
                }
            }

            iterator++;
        }

        return data;
    }




}

module.exports = RoomModelEvent;