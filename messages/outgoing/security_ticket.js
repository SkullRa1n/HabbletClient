const ByteBuffer = require('bytebufferjs');

module.exports = class SecutiryTicket extends ByteBuffer {

    constructor(sso) {
        super();
        this.writeShort(2419);
        this.writeString(sso);
        this.writeInt(0x317b);
    }

}