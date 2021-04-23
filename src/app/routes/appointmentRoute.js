const { Router } = require('express');
const AppointmentController = require('../controllers/AppointmentController');

const routes = Router();

routes.get('/appointment', AppointmentController.index);
routes.get('/appointment/:id', AppointmentController.show);
routes.post('/appointment', AppointmentController.store);
routes.put('/appointment/:id', AppointmentController.update);
routes.delete('/appointment/:id', AppointmentController.destroy);

module.exports = routes;