const WebSocket = require("ws");
const { EventEmitter } = require("events");
const ReleaseVersion = require("./messages/outgoing/release_version");
const SecurityMachine = require("./messages/outgoing/security_machine");
const SecutiryTicket = require("./messages/outgoing/security_ticket");
const ByteBuffer = require("bytebufferjs");
const Incoming = require("./messages/incoming");
const UserInfo = require("./messages/outgoing/user_info");
const MessengerInit = require("./messages/outgoing/messenger_init");

module.exports = class HabbletClient extends EventEmitter {

    sso;
    connection;
    authenticated;

    favoriteRooms;

    debug;

    constructor(sso) {
        super();
        this.sso = sso;
        this.authenticated = false;
        this.favoriteRooms = [];
        this.debug = false;

        this.connection = new WebSocket("wss://proxy.habblet.city/", {
            origin: "https://www.habblet.city"
        });
        this.connection.on("open", () => {
            this.emit("connection-open");
        });
        this.connection.on("message", (data) => {
            let packet = new ByteBuffer(data);
            Incoming.Parse(this, packet);
        });
        this.connection.on("close", () => {
            this.emit("connection-close");
        });

        this.on("authenticated", () => {
            this.connection.send(new UserInfo().compose());
            // this.connection.send(new MessengerInit().compose());
        });
    }

    authenticate() {
        this.connection.send(new ReleaseVersion().compose());
        this.connection.send(new SecurityMachine().compose());
        this.connection.send(new SecutiryTicket(this.sso).compose());
    }

}