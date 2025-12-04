const os = require('os');
console.log("CPU Architecture:", os.arch());
console.log("System Uptime:", os.uptime());
console.log("User Info:", os.userInfo());
console.log("Host:", os.hostname());
console.log("Platform:", os.platform(), os.release());
