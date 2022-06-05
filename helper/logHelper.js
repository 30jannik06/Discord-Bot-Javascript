class LogHelper {
    async log(msg) {
        console.log(msg);
    }
    async error(msg) {
        console.error(msg);
    }
    async warn(msg) {
        console.warn(msg);
    }
}

const logHelper = new LogHelper();

module.exports = logHelper