let Room = require("../../habbo/Room")
let RoomModelComposer = require("../outgoing/RoomModelComposer")

class RoomModelName {

	Parse(packet, client){

		let data = {
			name: packet.readString(),
			roomId: packet.readInt()
		}

		if(Room.Id !== data.roomId){
			Room.Id = data.roomId;
			Room.Name = data.name;
		}

		client.Connection.send(new RoomModelComposer().compose());

	}

}


module.exports = RoomModelName;