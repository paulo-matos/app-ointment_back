const models = require('../models');
const Patient = models.Patient;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class PatientController {
  async index(req, res) {
    try {
      const patients = await Patient.findAll({
        order: [
          ['name', 'ASC']
        ]
      });
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

  async findByName(req, res) {
    let varName = `${req.params.name}`;
    try {
      const patients = await Patient.findAll({
        where: {
          name: {
            [Op.like]: `%${varName}%`
          }
        },
        order: [
          ['name', 'ASC']
        ]
      });
      return res.json(patients);
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