const ByteBuffer = require('bytebufferjs');

module.exports = class AchievementList extends ByteBuffer {

    constructor() {
        super();
        this.writeShort(219);
    }

}