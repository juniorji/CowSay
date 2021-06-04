const myObject = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello ${myObject.name} from ls${myObject.campus}`,
    e : "oO",
    T : "U "
}));


//git clone url (invio)
//git add * (invio)
//git commit 'first commit'
//git commit -n