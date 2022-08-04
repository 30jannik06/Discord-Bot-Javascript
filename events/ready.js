const client = require("../index");
const {
    log,
    error,
    warn,
    clear
} = require("../helper/logHelper")

client.on("ready", () => {
    //If your want that the Console gets cleared when Bot is Ready use "Clear()";
    //clear()
    log(`Bot is logged in as ${client.user.tag}.`)
})