const { Router } = require('express');
const DoctorController = require('../controllers/DoctorController');

const routes = Router();

routes.get('/doctor', DoctorController.index);
routes.get('/doctor/:id', DoctorController.show);
routes.post('/doctor', DoctorController.store);
routes.put('/doctor/:id', DoctorController.update);
routes.delete('/doctor/:id', DoctorController.destroy);

module.exports = routes;