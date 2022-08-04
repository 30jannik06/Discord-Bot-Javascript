class LogHelper {
    async log(msg) {
        console.log("📗[BOT] " + msg);
    }
    async error(msg) {
        console.error("📕[ERROR] " + msg);
    }
    async warn(msg) {
        console.warn("📙[WARN] " + msg);
    }
    async cmd(msg) {
        console.log("📘[CMD] " + msg);
    }
    async evnt(msg) {
        console.log("📓[EVENT] " + msg);
    }
    async clear() {
        console.clear();
    }
}

const logHelper = new LogHelper();

module.exports = logHelper