const ByteBuffer = require('bytebufferjs');

module.exports = class UserInfo extends ByteBuffer {

    constructor() {
        super();
        this.writeShort(357);
    }

}