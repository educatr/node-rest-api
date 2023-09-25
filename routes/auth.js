const router=require("express").Router();
const { response } = require("express");
const User =require("../models/User");
const bcript =require("bcrypt");
router.post("/register", async (req,res) =>{
    try {
      //Hashing the Password
        const salt= await bcript.genSalt(10);
        const hashedPassword =await bcript.hash(req.body.password, salt);
      //create new user 
     const newUser=  new User({
     username:req.body.username,
     email:req.body.email,
     password:hashedPassword
});
//     save user 
        const user=await newUser.save();
        // return the reponse
        res.status(201).json(user);
    } catch (error) {
      console.log("error occured coz",error)
    }
});

//Login is meant find user if exist

router.post("/login",async(req,res)=>{
  try {
    const user =await User.findOne({email:req.body.email});
  !user && res.status(404).send("user is not found")
  } catch (error) {
  
    console.log(error)
  }
})
module.exports = router