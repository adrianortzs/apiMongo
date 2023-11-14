const express = require('express');
const productsController = require("../controllers/products.controller");
const productsRouter = express.Router();

productsRouter.get('/', productsController.getProducts)
productsRouter.post('/', productsController.createProduct)
productsRouter.put('/:title', productsController.editProduct)
productsRouter.delete('/:title', productsController.deleteProduct)

module.exports = productsRouter;