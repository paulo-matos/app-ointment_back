const routes = require('express').Router();
const PatientController = require('../controllers/PatientController');


routes.get('/patient', PatientController.index);
routes.get('/patient/:id', PatientController.show);
routes.post('/patient', PatientController.store);
routes.put('/patient/:id', PatientController.update);
routes.delete('/patient/:id', PatientController.destroy);

module.exports = routes;