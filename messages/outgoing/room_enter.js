const ByteBuffer = require('bytebufferjs');

module.exports = class RoomEnter extends ByteBuffer {

    constructor(roomId, password) {
        super();
        this.writeShort(2312);
        this.writeInt(roomId);
        this.writeString(password);
    }

}