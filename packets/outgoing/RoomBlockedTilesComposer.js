let ByteBuffer = require("../../ByteBuffer")
let OutgoingHeaders = require("../../OutgoingHeaders")

class RoomBlockedTilesComposer extends ByteBuffer {

	constructor(){
		super();

		this.writeShort(OutgoingHeaders.ROOM_MODEL_BLOCKED_TILES);

	}

}

module.exports = RoomBlockedTilesComposer;