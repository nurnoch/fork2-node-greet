var argv = require('minimist')(process.argv.slice(2));
module.exports = function greet(name,drunk) {
     drunk = argv['drunk'];
     if(drunk) {
         return "hello, " + name + ", you look sexy today";
     } else {
     return 'hello, ' + name;
     }
 }
