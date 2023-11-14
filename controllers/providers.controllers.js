const providersModels = require('../models/providers');

const getProviders = async (req, res) => {
    let providers = await providersModels.find({});
   
    res.status(200).json(providers);
}

const createProvider = async (req, res) => {
    try {
        const newProvider = req.body;
        const response = await providersModels.create(newProvider);
        res.status(201).json({msj: "proovedor creado"}, response);
    }
    catch (error) {
        res.status(400).json({msj: `ERROR: ${error}`})
    }
}

const editProvider = async (req, res) => {
    // const {id = _id} = req.body
    // const response = await productsModels.findById(id)
    // await products.save()
    const edit = req.body;
    res.status(200).json({msj: `Proovedor actualizado: ${edit.provider}`});
};
  
const deleteProvider = (req, res) => {
    res.status(200).send("Se ha borrado el proovedor:" + req.params.provider);
};

module.exports = {getProviders,createProvider,editProvider,deleteProvider}