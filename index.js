const myObject = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello ${myObject.name} from ${myObject.campus} campus !`,
    e : "oO",
    T : "U "
}));
