let mongoose = require("mongoose");
let connect = ()=>{
    return mongoose.connect("mongodb+srv://Divya-Pidugu:pidugu_123@cluster0.9tbkn.mongodb.net/urben_products_db?retryWrites=true&w=majority")
}
//mongodb+srv://Divya-Pidugu:<password>@cluster0.9tbkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
module.exports = connect;