let HabbletClient = require("./HabbletClient");

// testeee

let client = new HabbletClient(
	"46a952d3f6532e1c5d0d4d8cf34f456fa80ce80d-36fe32dc8cd73326fdf3b92b9d62794c"
);

client.on("Loaded", () => {

	client.EnterRoom(5126181);

});

client.on("RoomUnitChat", data => {

	let unit = client.Room.GetUnitByIndex(data.roomIndex);
	if(unit && unit.username !== "bot00001" && data.message.startsWith(":")){
		let command = data.message.substr(1).split(' ');

		switch(command[0]){
			case "gritar":
				client.SendMessage("AAAAAAAAAAAAAAAAAAAAAAAAAAA");
				break;
			case "amar":
				client.SendMessage(`Eu te amo ${unit.username}`);
				break;
		}

	}
});
