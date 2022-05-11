let HabbletClient = require("./habblet_client");

let client = new HabbletClient("45673a88993a79777eaaed9fdb4cb4e80ab7e499-99fe967d5fc03db8e9c38533147b17a0");
client.debug = true;
client.on("connection-open", () => {
    client.authenticate();
});