const ByteBuffer = require('bytebufferjs');

module.exports = class RequestCameraConfiguration extends ByteBuffer {

    constructor() {
        super();
        this.writeShort(796);
    }

}