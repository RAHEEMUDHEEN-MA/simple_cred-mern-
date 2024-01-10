const mongoose = require("mongoose");

const producutSchema = mongoose.Schema({
  name: { type: String },
  brand: { type: String },
  prize: { type: String },
  type: { type: String },
});

const Products=mongoose.model("Products",producutSchema)
module.exports=Products
