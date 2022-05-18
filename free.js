let { HabbletClient } = require("habbletclient");
let readline = require("readline");
const config = require("./config.json");
const { readdirSync } = require("fs")
ascii = require("ascii-table");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = {
    run: async () => {
        rl.question("Sso.Ticket: ", answer => {
            let client = new HabbletClient(answer);
            client.debug = false;
            client.on("connection-open", () => {
                client.authenticate();
            });
            
            let table = new ascii("Comandos");
            table.setHeading("Comandos", "Estado de carregamento");
            var Map = require("collections/map");
                readdirSync("./runcodes").forEach(dir => {
                    client.commands = new Map();
                    client.aliases = new Map();
                    const commands = readdirSync(`./runcodes/${dir}/`).filter(file => file.endsWith(".js"));
            
                    for (let file of commands) {
                        let pull = require(`./runcodes/${dir}/${file}`);
                        pull.name = file.replace(".js", "")
                        pull.category = dir
                        client.commands.set(pull.name, pull);
                        table.addRow(file, '✅ - Ok');
                        console.log(pull)
                        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
                    }
                });

            client.on("authenticated", () => {
                setTimeout(() => {
                    console.log("Entrando no quarto...");
                    client.enterRoom(config.roomid);
                }, 1000);
            });

            client.on("unit-chat", async chatMessage => {
                try{
                    let prefixo = config.botprefix;
                    const args = await chatMessage.message.slice(prefixo.length).trim().split(/ +/g);
                    const cmd = await args.shift().toLowerCase();

                    let command = await client.commands.get(cmd)
                    if(!command) command = await client.commands.get(client.aliases.get(cmd));
                    if(!command) return

                    await command.run(chatMessage, client, args, answer)
                } catch(e) {
                    console.log(e)
                }
            });
        });
    }
}