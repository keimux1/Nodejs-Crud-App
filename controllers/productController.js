const Product = require("../models/product.model")

const getProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message});
  }
}

const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message});
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message});
  }
}

const upDateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    
    if(!product){
      return res.status(404).json({message:"Product not Found"});
    }
    const updatedproduct = await Product.findById(req.params.id);
    res.status(200).json(updatedproduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message});
  }
}

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product){
      return res.status(404).json({message:"Product not Found"});
    }
    res.status(200).json({message:"product delete success"});
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message});
  }
}


module.exports = {getProduct,getOneProduct,createProduct,upDateProduct,deleteProduct}