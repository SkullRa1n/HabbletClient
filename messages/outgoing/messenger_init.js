const ByteBuffer = require('bytebufferjs');

module.exports = class MessengerInit extends ByteBuffer {

    constructor() {
        super();
        this.writeShort(2781);
    }

}