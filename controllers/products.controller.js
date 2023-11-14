const productsModels = require('../models/products');

const getProducts = async (req, res) => {
    // let products = await productsModels.find({});  
    // res.status(200).json(products);
    let products = await productsModels.find({}, "-_id").populate("provider", "company_name cif address -_id")
    res.status(200).json(products)
}

const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const response = await productsModels.create(newProduct);
        res.status(201).json({msj: "producto creado"}, response);
    }
    catch (error) {
        res.status(400).json({msj: `ERROR: ${error}`})
    }
}

const editProduct = async (req, res) => {
    // const {id = _id} = req.body
    // const response = await productsModels.findById(id)
    // await products.save()
    const edit = req.body;
    res.status(200).json({msj: `Producto actualizado: ${edit.company_name}`} + req.params.title);
};
  
const deleteProduct = (req, res) => {
    res.status(200).send("Se ha borrado el producto:" + req.params.title);
};

module.exports = {getProducts,createProduct,editProduct,deleteProduct}
  
  