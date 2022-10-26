const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// info returns system uptime
console.log(`System uptime is ${os.uptime} seconds`);

//info about current os
const currentOs = {
    type: os.type(),
    release: os.release(),
    freeMem: os.freemem(),
    totalMem: os.totalmem(),
};
console.log(currentOs);