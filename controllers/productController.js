import productModel from "../models/productModel.js";

const showProducts = (req,res) => {
    res.render("home",{productModel})
}

export {showProducts}