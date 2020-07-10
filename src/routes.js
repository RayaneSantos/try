const express = require('express')

const ChurchesController = require('./../controllers/Churches')

const routes = express.Router()

routes.get('/missas', ChurchesController.index);
routes.post('/missas', ChurchesController.create);
routes.put('/missas', ChurchesController.edit);
routes.delete('/missas', ChurchesController.delete);

module.exports = routes
