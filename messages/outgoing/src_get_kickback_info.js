const ByteBuffer = require('bytebufferjs');

module.exports = class SrcGetKickbackInfo extends ByteBuffer {

    constructor() {
        super();
        this.writeShort(869);
    }

}