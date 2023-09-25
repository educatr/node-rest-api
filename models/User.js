const mongoose=require("mongoose");


//Create the Schema

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:2 ,
        max:20
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        unique:true
    },
    profilePicture:{
        type:String,
        default:"",

    },
    coverPicture:{
        type:String,
        default:"",

    },
    followers:{
        type:Array,
        default:[]

    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
         default:false

    }
},
{timestamps:true});

// models
module.exports= mongoose.model("User",userSchema);

