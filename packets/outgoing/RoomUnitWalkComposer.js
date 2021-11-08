let ByteBuffer = require("../../ByteBuffer");
let OutgoingHeaders = require("../../OutgoingHeaders");

class RoomUnitWalkComposer extends ByteBuffer {

	constructor(x, y){
		super();

		this.writeShort(OutgoingHeaders.UNIT_WALK);
		this.writeInt(x);
		this.writeInt(y);

	}

}

module.exports = RoomUnitWalkComposer;