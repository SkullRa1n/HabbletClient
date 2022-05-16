const WebSocket = require("ws");
const { EventEmitter } = require("events");
const ReleaseVersion = require("./messages/outgoing/release_version");
const SecurityMachine = require("./messages/outgoing/security_machine");
const SecutiryTicket = require("./messages/outgoing/security_ticket");
const ByteBuffer = require("bytebufferjs");
const Incoming = require("./messages/incoming");
const UserInfo = require("./messages/outgoing/user_info");
const MessengerInit = require("./messages/outgoing/messenger_init");
const RoomEnter = require("./messages/outgoing/room_enter");
const UserCurrency = require("./messages/outgoing/user_currency");
const AchievementList = require("./messages/outgoing/achievement_list");
const GroupParts = require("./messages/outgoing/group_parts");
const RequestCameraConfiguration = require("./messages/outgoing/request_camera_configuration");
const GetClubGiftInfo = require("./messages/outgoing/get_club_gift_info");
const SrcGetKickbackInfo = require("./messages/outgoing/src_get_kickback_info");
const UserIgnored = require("./messages/outgoing/user_ignored");
const UnitChat = require("./messages/outgoing/unit_chat");
const config = require("./config.json");

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
            // this.connection.send(new UserInfo().compose());
            // this.connection.send(new MessengerInit().compose());
            // this.connection.send(new UserCurrency().compose());
            // this.connection.send(new AchievementList().compose());
            // this.connection.send(new GroupParts().compose());
            // this.connection.send(new RequestCameraConfiguration().compose());
            // this.connection.send(new GetClubGiftInfo().compose());
            // this.connection.send(new SrcGetKickbackInfo().compose());

            this.connection.send(new UserIgnored(`${config.botname}`).compose());
        });
    }

    authenticate() {
        this.connection.send(new ReleaseVersion().compose());
        this.connection.send(new SecurityMachine().compose());
        this.connection.send(new SecutiryTicket(this.sso).compose());
    }

    enterRoom(id) {
        this.connection.send(new RoomEnter(id, '').compose());
    }

    sendRoomTalk(message) {
        this.connection.send(new UnitChat(message).compose());
    }

}