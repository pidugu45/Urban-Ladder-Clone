const mongoose = require("mongoose");


const productScheema = new mongoose.Schema({
    "id": { required: true, type: Number, unique: true },
    "image":{required: true, type: String},
    "name": { required: true, type: String },
    "size_finish": { required: true, type: String },
    "by": { required: true, type: String },
    "MRP_price": { required: true, type: Number },
    "discount": { type: Number },
    "emi_from": { required: true, type: Number },
    "related_images": [{ required: true, type: String }],
    "product_details": [
        { "net_quantity": { required: true, type: String } },
        { "dimensions": { required: true, type: String } },
        { "country_of_region": { required: true, type: String } },

        
    ]
    
},{
    versionKey: false,
    timestamps: true
});
const Product = mongoose.model("product", productScheema);
module.exports =Product ;