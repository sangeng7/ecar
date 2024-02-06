import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_desc: { type: String, required: true },
    product_image: { type: String, required: true }
},
    { timestamps: true }
)

const ProductModel = mongoose.model("Product", productSchema)

export default ProductModel