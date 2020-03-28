const express = require('express');
const OngController = require('./controllers/OngControlles');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.delete('/ongs', OngController.delete);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;