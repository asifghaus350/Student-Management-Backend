var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

console.log('System Uptime: ' + os.uptime() + ' seconds');
console.log('OS Type: ' + os.type());
