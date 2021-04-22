module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('appointment', {
    id_appointment: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    id_patient: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Patient',
        key: 'id_patient',
      },
      onDelete: 'RESTRICT',
    },
    id_doctor: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Doctor',
        key: 'id_doctor',
      },
      onDelete: 'RESTRICT',
    },
    date_schedulled: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('appointment'),
};