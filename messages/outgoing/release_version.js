const ByteBuffer = require('bytebufferjs');

module.exports = class ReleaseVersion extends ByteBuffer {

    constructor() {
        super();
        this.writeShort(4000);
        this.writeString("PRODUCTION-202101271337-HTML5");
        this.writeString("HTML5");
        this.writeInt(2);
        this.writeInt(1);
    }

}