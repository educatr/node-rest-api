const express = require('express');
const mongoose =require("mongoose");
const heltmet=require("helmet");
const morgan =require("morgan");
const bodyParser = require('body-parser');
const dotenv=require("dotenv");
dotenv.config();
const userRoute=require("./routes/users")
const authRoute=require("./routes/auth");

const app = express();
//Express middleware
express(express.json());
app.use(bodyParser.json());
app.use(heltmet());
app.use(morgan("common"));
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
 
try {
  mongoose.connect(process.env.MONGODB_URL,
    console.log("mongodb is connected ❤️"))

} catch (error) {
  console.error(error)
}
app.listen(process.env.PORT, () =>console.log(`Example app listening on port ${process.env.PORT}!`));