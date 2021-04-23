module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('patient', {
    id_patient: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    cpf: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    rg: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    birth_date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()'),
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()'),
    },
  }),
  down: queryInterface => queryInterface.dropTable('patient'),
};