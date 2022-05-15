const ByteBuffer = require('bytebufferjs');

module.exports = class UnitChat extends ByteBuffer {

    constructor(message, styleId = 0) {
        super();
        this.writeShort(1314);
        this.writeString(message);
        this.writeInt(styleId);
    }

}