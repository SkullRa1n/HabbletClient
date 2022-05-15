const ByteBuffer = require('bytebufferjs');

module.exports = class UserIgnored extends ByteBuffer {

    constructor(username) {
        super();
        this.writeShort(3878);
        this.writeString(username);
    }

}