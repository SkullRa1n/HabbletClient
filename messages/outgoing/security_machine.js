const ByteBuffer = require('bytebufferjs');

module.exports = class SecurityMachine extends ByteBuffer {

    constructor() {
        super();
        this.writeShort(2490);
        this.writeString('');
        this.writeString("UIID-936726677");
    }

}