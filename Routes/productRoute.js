const express = require("express")
const { model } = require("mongoose")
const Product = require("../models/product.model.js")
const {getProduct,getOneProduct,createProduct,upDateProduct,deleteProduct} = require("../controllers/productController.js");

const router = express.Router()

//getting a product from db
router.get("/",getProduct ) 
router.get("/:id",getOneProduct)

//creating a new product
router.post("/",createProduct)

//updating a product
router.put("/:id",upDateProduct)

//deleting a product
router.delete("/:id",deleteProduct)

module.exports = router;