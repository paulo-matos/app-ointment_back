const models = require('../models');
const Patient = models.Patient;

class PatientController {
  async index(req, res) {
    try {
      const patients = await Patient.findAll();
      return res.json(patients);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id);

      return res.json(patient);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const patient = await Patient.create(req.body);

      return res.json(patient);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id);

      await patient.update(req.body);

      return res.json({ patient });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id);

      await patient.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PatientController();