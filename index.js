let HabbletClient = require("./habblet_client");
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("SSO > ", answer => {
    let client = new HabbletClient(answer);
    client.debug = true;
    client.on("connection-open", () => {
        client.authenticate();
    });

    client.on("authenticated", () => {
        setTimeout(() => {
            console.log("Entering room...");
            client.enterRoom(5390364);
        }, 100);
    });

    client.on("unit-chat", async chatMessage => {});
});