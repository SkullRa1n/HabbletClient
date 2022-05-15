

module.exports = class RoomRolling {

    static header = 3207;

    static Parse(client, packet) {
        const x = packet.readInt();
        const y = packet.readInt();
        const nextX = packet.readInt();
        const nextY = packet.readInt();

        let totalItems = packet.readInt();
        let itemsRolling = [];

        while (totalItems-- > 0) {
            const id = packet.readInt();
            const height = parseFloat(packet.readString());
            const nextHeight = parseFloat(packet.readString());
            // const rollingData = new ObjectRolling(id, new Vector3d(x, y, height), new Vector3d(nextX, nextY, nextHeight));
            const rollingData = {
                id: id,
                location: {
                    x: x,
                    y: y,
                    z: height
                },
                targetLocation: {
                    x: nextX,
                    y: nextY,
                    z: nextHeight
                },
                movementType: null
            };

            itemsRolling.push(rollingData);
        }

        this._rollerId = packet.readInt();

        if (!packet.hasBytesAvailable()) {
            console.log(itemsRolling);
            return true
        }

        const movementType = packet.readInt();
        const unitId = packet.readInt();
        const height = parseFloat(packet.readString());
        const nextHeight = parseFloat(packet.readString());
        let unitRolling;

        switch (movementType) {
            case 0: break;
            case 1:
                // this._unitRolling = new ObjectRolling(unitId, new Vector3d(x, y, height), new Vector3d(nextX, nextY, nextHeight), ObjectRolling.MOVE);
                unitRolling = {
                    id: unitId,
                    location: {
                        x: x,
                        y: y,
                        z: height
                    },
                    targetLocation: {
                        x: nextX,
                        y: nextY,
                        z: nextHeight
                    },
                    movementType: "MOVE"
                };
                break;
            case 2:
                // this._unitRolling = new ObjectRolling(unitId, new Vector3d(x, y, height), new Vector3d(nextX, nextY, nextHeight), ObjectRolling.SLIDE);
                unitRolling = {
                    id: unitId,
                    location: {
                        x: x,
                        y: y,
                        z: height
                    },
                    targetLocation: {
                        x: nextX,
                        y: nextY,
                        z: nextHeight
                    },
                    movementType: "SLIDE"
                };
                break;
        }
        client.debug && console.log(unitRolling)
    }

}