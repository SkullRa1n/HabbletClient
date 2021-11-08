let HabbletClient = require("./HabbletClient");

//ontem eu comi as 20 novinhas e eu n peguei nenhum DST confia rapa
let client = new HabbletClient("791d7f1003acc9105ffc1bb78734808953434927-a57992d63c509ca93672436c3e2016ed");

client.on("Loaded", () => {

	client.EnterRoom(5126181);

});

client.on("RoomUnitChat", data => {

	console.log(data.message)

})