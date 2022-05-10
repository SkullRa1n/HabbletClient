const fs = require("fs");
const files = fs.readdirSync("./messages/incoming");
const handles = {};

for(let file of files) {
    if(file.endsWith(".js")) {
        const handler = require("./incoming/" + file.replace(".js", ""));
        handles[handler.header] = handler;
    }
}

module.exports = class Incoming {

    static Parse(client, packet) {
        let length = packet.readInt();
        let header = packet.readShort();
        if(handles[header]) {
            handles[header].Parse(client, packet);
        }
    }

}