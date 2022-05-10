const WebSocket = require("ws");
const { EventEmitter } = require("events");
const ReleaseVersion = require("./messages/outgoing/release_version");
const SecurityMachine = require("./messages/outgoing/security_machine");
const SecutiryTicket = require("./messages/outgoing/security_ticket");

module.exports = class HabbletClient extends EventEmitter {

    sso;
    connection;

    constructor(sso) {
        super();
        this.sso = sso;
        this.connection = new WebSocket("wss://proxy.habblet.city/", {
            origin: "https://www.habblet.city"
        });
        this.connection.on("open", () => {
            this.emit("connection-open");
        });
        this.connection.on("message", (data) => {

        });
        this.connection.on("close", () => {
            this.emit("connection-close");
        });
    }

    authenticate() {
        this.connection.send(new ReleaseVersion().toBuffer());
        this.connection.send(new SecurityMachine().toBuffer());
        this.connection.send(new SecutiryTicket(this.sso).toBuffer());
    }

}