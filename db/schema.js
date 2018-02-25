const connection=require("./connection");
const Schema=connection.Schema;

const clientsSchema= new Schema({
     mobilenumber:{type:String,index: { unique: true}},
    username:{type:String},
    password:{type:String},    
    confirmPw:{type:String}
    /*name:String,userid:String,password:String,contact_no:String*/
}) ;


var clientsModel=connection.model("clients",clientsSchema);
module.exports.clientsModel=clientsModel;

const cartSchema= new Schema({
    userid:{type:String,index: { unique: true}},
   items:{type:Array}
}) ;
var cartModel=connection.model("cart",cartSchema);
module.exports.cartModel=cartModel;