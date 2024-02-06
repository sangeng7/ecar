import ProductModel from "../models/product.model.js";

const addProduct = async (req, res) => {
    const productData = req.body;
    try {
        const saveData = new ProductModel(productData);
        const savedData = await saveData.save();
        res.status(200).json({ message: "Product saved successfully!", data: savedData })
    } catch (error) {
        res.status(500).json({ message: "Unable to post product!", error })
    }
}

const getProduct = async (req, res) => { 
    try {
        const products = await ProductModel.find();
        if (!products || products.length === 0) {
            res.status(404).json({ message: "Product not found!" })
        } else {
            res.status(200).json({ product: products })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export { addProduct, getProduct }