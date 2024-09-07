// Node.js mein os ek built-in module hai jo operating system ke baare mein information provide karta hai. Is module ka use karke aap system-related information jaise ki CPU architecture, free memory, hostname, platform, etc., ko access kar sakte hain.//

const os = require('os');
console.log(os);

console.log('Operating System Info:');
console.log('------------------------');
console.log('OS Type: ' + os.type());
console.log('Platform: ' + os.platform());
console.log('CPU Architecture: ' + os.arch());
console.log('Total Memory: ' + os.totalmem());
console.log('Free Memory: ' + os.freemem());
console.log('System Uptime: ' + os.uptime() + ' seconds');
console.log('Hostname: ' + os.hostname());
console.log('Network Interfaces: ', os.networkInterfaces());
