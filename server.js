
//requiring packages
var userRouter=require("./routes");
const express=require("express");
var app=express();
const bodyParser = require("body-parser");
const cookieParser=require("cookie-parser");


//auth packages
const session=require("express-session");
const passport=require("passport");
var flash    = require('connect-flash');
var MongoDBStore = require('connect-mongodb-session')(session);

//parsing middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//routes
app.use(express.static("./public"));

//making sessions collection
var store = new MongoDBStore(
  {
    uri: 'mongodb://nvjot:1234@ds245478.mlab.com:45478/shoppingcrap',
    collection: 'mySessions'
  });
   // Catch errors
   store.on('error', function(error) {
    assert.ifError(error);
    assert.ok(false);
  });


app.use(session({
    secret: 'thisisarandomstringforhashingpasswords',
    resave: false,
    store:store,
    saveUninitialized: false
    //cookie: { secure: true }
  })); 

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  

  app.use("/",userRouter);



app.listen(process.env.PORT||3000,()=>console.log("server starts"));    

