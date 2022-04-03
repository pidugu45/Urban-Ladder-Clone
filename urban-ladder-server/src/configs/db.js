let mongoose = require("mongoose");
require("dotenv").config();
let connect = ()=>{
    return mongoose.connect(process.env.MONGODB_URL)
}
//mongodb+srv://Divya-Pidugu:<password>@cluster0.9tbkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
module.exports = connect;