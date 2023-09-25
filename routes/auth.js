const router=require("express").Router();
const User =require("../models/User");

router.get("/register", async (req,res) =>{
    // i use get to get the information on the browser before using the post to create 
    // create new user 
    const user=  new User({
      username:"john",
      email:"jen@gmail.com",
      password:"123457"
    });
    await user.save();
   res.send("ok")
});

module.exports = router;

