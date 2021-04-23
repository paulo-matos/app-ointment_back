const models = require('../models');
const Appointment = models.Appointment;

class AppointmentController {
  async index(req, res) {
    try {
      const appointments = await Appointment.findAll();

      return res.json(appointments);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const appointment = await Appointment.findByPk(req.params.id);

      return res.json(appointment);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const appointment = await Appointment.create(req.body);

      return res.json(appointment);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const appointment = await Appointment.findByPk(req.params.id);

      await appointment.update(req.body);

      return res.json({ appointment });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const appointment = await Appointment.findByPk(req.params.id);

      await appointment.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new AppointmentController();