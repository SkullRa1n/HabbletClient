let ByteBuffer = require("../../ByteBuffer")
let OutgoingHeaders = require("../../OutgoingHeaders")

class RoomDoorSettingsComposer extends ByteBuffer {

	constructor(){
		super();

		this.writeShort(OutgoingHeaders.ROOM_MODEL_DOOR);

	}

}

module.exports = RoomDoorSettingsComposer;