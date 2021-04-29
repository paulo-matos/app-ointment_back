const models = require('../models');
const Doctor = models.Doctor;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class DoctorController {
  async index(req, res) {
    try {
      const doctors = await Doctor.findAll({
        order: [
          ['name', 'ASC']
        ]
      });
      return res.json(doctors);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const doctor = await Doctor.findByPk(req.params.id);

      return res.json(doctor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async findByName(req, res) {
    let varName = `${req.params.name}`;
    try {
      const doctors = await Doctor.findAll({
        where: {
          name: {
            [Op.like]: `%${varName}%`
          }
        },
        order: [
          ['name', 'ASC']
        ]
      });
      return res.json(doctors);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const doctor = await Doctor.create(req.body);

      return res.json(doctor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const doctor = await Doctor.findByPk(req.params.id);

      await doctor.update(req.body);

      return res.json({ doctor });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const doctor = await Doctor.findByPk(req.params.id);

      await doctor.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new DoctorController();