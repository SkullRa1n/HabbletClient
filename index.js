let HClient = require('./habblet_client');

let client = new HClient("b4e7025d671a7cdeff3bb4e046d259e7f6a6bda8-99fe967d5fc03db8e9c38533147b17a0");
client.on("connection-open", () => {
    client.authenticate();
});