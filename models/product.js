import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    altNames : {
        type : [String],
        default : []
    },
    labelledPrice : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    images : {
        type : [String],
        default : ["/default-product.jpg"]
    },
    stock : {
        type : Number,
        default : 0,
        required : true
    },
    isAvailable : {
        type : Boolean,
        default : true
    },
    category : {
        type : String,
        required : true,
        deault : "Cosmetics"
    }
})

const Product = mongoose.model("Product",productSchema)
export default Product;