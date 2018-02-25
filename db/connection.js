var mongoose = require('mongoose');
mongoose.connect('mongodb://nvjot:1234@ds245478.mlab.com:45478/shoppingcrap');
console.log("connect");
module.exports=mongoose;
