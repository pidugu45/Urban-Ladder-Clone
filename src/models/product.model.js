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
    "product_details": 
        {
            "net_quantity": { required: true, type: String } ,
         "dimensions": { required: true, type: String } ,
            "country_of_region": { required: true, type: String }
        }  
    ,
    "more_information": {
        "MRP": {required: true, type: Number },
        "Manufactured By": {required: true, type: String },
        "Consumer Care Details": {required: true, type: String },
        "Imported By": {required: true, type: String },
        "Marketed By": {required: true, type: String },
        "Sold By":{required: true, type: String }
        
    },
    'reasons_to_love_this_product': [
        {
            "title": { required: true, type: String },
            "description": { required: true, type: String },
            "image":{required: true, type: String }
        }
    ],
    "product_dimensions":[{required: true, type: String }]
    
},{
    versionKey: false,
    timestamps: true
});
const Product = mongoose.model("product", productScheema);
module.exports = Product;



/*





 {
     "id":,
    "image":"",
    "name": "",
    "size_finish":"",
    "by": "",
    "MRP_price":,
    "discount":,
    "emi_from":,
    "related_images": ["","",""],
    "product_details": 
        { "net_quantity":"" ,
        "dimensions":"" ,
         "country_of_region":"" },
         "more_information": {
        "MRP":,
        "Manufactured By": "",
        "Consumer Care Details":"" ,
        "Imported By": "",
        "Marketed By": "",
        "Sold By":""
        
    },
    "reasons_to_love_this_product": [
        {
            "title": "",
            "description":"" ,
            "image":""
        },
        {
               "title":"" ,
            "description":"" ,
            "image":""
        },
        {
               "title":"" ,
            "description":"" ,
            "image":""
        },
         {
            "title":"",
            "description": "",
            "image":""
        }
        
        
        
    ],
    "product_dimensions":["",""]
}




 */