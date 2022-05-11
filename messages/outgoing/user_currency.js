const ByteBuffer = require('bytebufferjs');

module.exports = class UserCurrency extends ByteBuffer {

    constructor() {
        super();
        this.writeShort(273);
    }

}