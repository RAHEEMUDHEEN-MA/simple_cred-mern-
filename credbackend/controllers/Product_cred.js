const Products = require("../models/product_schema");

const addProduct = async (req, res) => {
  const { name, brand, prize, type } = req.body;
  if (!name || !brand || !prize || !type) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }
  const Product = await Products.create({ name, brand, prize, type });
  res.json(Product);
};

const test1=async(req,res)=>{
  res.json("hi dudee")
}

const viewallProducts = async (req, res) => {
  const AllProduct = await Products.find();
  res.json(AllProduct);
};

const viewoneProduct = async (req,res) => {
  try{
    const id = req.params.id;
    const product = await Products.findById(id);
    if(!product){
      res.send("no details")

    }
    res.json(product);
  }
  catch(err){
    console.log("error:",err)

  }
 
};

const editProduct = async (req,res ) => {
  const id = req.params.id;
  const {name,brand,prize,type}=req.body;
  const productupdate=await Products.findByIdAndUpdate(id,{name,brand,prize,type})
  res.json(productupdate)
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const product = await Products.findByIdAndDelete(id);
    res.json("deleted");
    if(!id){
      console.log("id is invalid")

    }
  }
  catch(er){
    console.log("error:",er)

  }
 

};

module.exports = {addProduct,viewallProducts,viewoneProduct,editProduct,deleteProduct,test1};
