const router = require("express").Router();
const mongoose = require("./db/connection");
const model = require("./db/schema");
const passport=require("passport");
 
 var bcrypt = require('bcrypt');

router.get("/cartdata",(req,res)=>
{
  if(req.isAuthenticated())
  {
    
    model.clientsModel.findOne({_id:req.user},(err,data)=>
    {
        if(err)
        {
            console.log(err)
        }
        else
        console.log(data);
    })
  }
  else
  console.log(req.isAuthenticated());
});

router.post("/register", (req, res) => {
   
    let obj = {
        "mobilenumber": req.body.mobilenumber,
        "username": req.body.username,
        "password":bcrypt.hashSync(req.body.password, 10),
        "confirmPw":req.body.pwagain
    };
    if(obj.mobilenumber && obj.username && obj.confirmPw && obj.password  )
    {
        model.clientsModel.create(obj, (err) => {
        if (err)
            console.log(err);
    });

    res.redirect("/");
    }
    else
    {
        res.send("some credential is wrong/empty");
    }
});

router.post("/login",(req,res)=>
{
   if(req.body.mobilenumber&&req.body.password)
    {
        model.clientsModel.findOne({mobilenumber:req.body.mobilenumber}, (err,data) => {
        if (err)
            console.log(err);

            else
            if(data.length!=0)
            {   
                if(bcrypt.compareSync(req.body.password,data.password))
             // if(data.password===req.body.password) 
              { 
               
               var userId=data._id;
               req.login(userId,(err)=>
            {   
                res.send({uservalid: req.isAuthenticated()});          
            });
            
        }
            }

    });
    }
    
});


router.get("/logout",(req,res)=>
{
    if(req.isAuthenticated())
{
req.logout();
req.session.destroy();

res.send({uservalid: req.isAuthenticated()});
}
});

passport.serializeUser(function(userId, done) {

    done(null, userId);
  });
  passport.deserializeUser(function(userId, done) {
    done(null, userId);
  });
  


module.exports = router;