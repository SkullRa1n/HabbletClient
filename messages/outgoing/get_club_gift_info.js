const ByteBuffer = require('bytebufferjs');

module.exports = class GetClubGiftInfo extends ByteBuffer {

    constructor() {
        super();
        this.writeShort(487);
    }

}