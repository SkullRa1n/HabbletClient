let ByteBuffer = require("../../ByteBuffer");
let OutgoingHeaders = require("../../OutgoingHeaders");

class UserMottoComposer extends ByteBuffer {

	constructor(motto){
		super();

		this.writeShort(OutgoingHeaders.USER_MOTTO);
		this.writeString(motto);

	}

}

module.exports = UserMottoComposer;