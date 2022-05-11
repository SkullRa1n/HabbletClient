const ByteBuffer = require('bytebufferjs');

module.exports = class GroupParts extends ByteBuffer {

    constructor() {
        super();
        this.writeShort(813);
    }

}