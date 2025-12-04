const os = require('os');
console.log("Free RAM:", os.freemem());
console.log("Total RAM:", os.totalmem());
console.log("Load average:", os.loadavg()); // UNIX only