const routes = require('express').Router();
const DoctorController = require('../controllers/DoctorController');


routes.get('/doctor', DoctorController.index);
//routes.get('/doctor/:id', DoctorController.show);
routes.get('/doctor/:name', DoctorController.findByName);
routes.post('/doctor', DoctorController.store);
routes.put('/doctor/:id', DoctorController.update);
routes.delete('/doctor/:id', DoctorController.destroy);

module.exports = routes;