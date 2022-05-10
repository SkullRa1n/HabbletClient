let HClient = require('./habblet_client');

let client = new HClient("a93092e200efface052ee29e205e371b934f6b9d-99fe967d5fc03db8e9c38533147b17a0");
client.debug = true;
client.on("connection-open", () => {
    client.authenticate();
});