let ByteBuffer = require("../../ByteBuffer")
let OutgoingHeaders = require("../../OutgoingHeaders")

class RoomModelComposer extends ByteBuffer {

	constructor(){
		super();

		this.writeShort(OutgoingHeaders.ROOM_MODEL);

	}

}

module.exports = RoomModelComposer;