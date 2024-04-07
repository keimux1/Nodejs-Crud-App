const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoutes = require("./Routes/productRoute.js")

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routers
app.use("/api/products",productRoutes);
// app.use(express.static(path.join(__dirname,)))


mongoose.connect("mongodb+srv://keimux:Housefly2001@backenddb.4tecy4p.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
async function startServer() {
  try {
    console.log("Connected to the DB");
    app.listen(3000, () => {
      console.log("server listening on 3000");
    });
  } catch (error) {
    console.log("Failed Connected to the DB");
  }
}

startServer();




