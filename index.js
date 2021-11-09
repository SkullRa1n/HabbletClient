let HabbletClient = require("./HabbletClient");

let client = new HabbletClient(
	"ed4c1a5c62730bbedd856e9c15e52d1507f7173d-36fe32dc8cd73326fdf3b92b9d62794c"
);

client.on("Loaded", () => {

	client.EnterRoom(5126181);

});

client.on("RoomUnitChat", data => {

	let unit = client.Room.GetUnitByIndex(data.roomIndex);
	if(unit && unit.username !== "bot00001" && data.message.startsWith(":")){
		let command = data.message.split(' ');

		switch(command[0]){
			case ":gritar":
				client.SendMessage("AAAAAAAAAAAAAAAAAAAAAAAAAAA");
				break;
			case ":andar":
				client.WalkTo(Number(command[1]), Number(command[2]))
				break;
			case ":ebase64":
				command.shift();
				command = command.join(" ");
				console.log(command)
				client.UpdateMotto(Buffer.from(command).toString("base64"));
				break;
			case ":dbase64":
				command.shift();
				command = command.join(" ");
				console.log(command)
				client.UpdateMotto(Buffer.from(command, "base64").toString());
				break;
		}

	}
});
