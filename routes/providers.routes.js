const express = require('express');
const providersController = require("../controllers/providers.controllers");
const providersRouter = express.Router();

providersRouter.get('/', providersController.getProviders)
providersRouter.post('/', providersController.createProvider)
providersRouter.put('/:id', providersController.editProvider)
providersRouter.delete('/:id', providersController.deleteProvider)

module.exports = providersRouter;