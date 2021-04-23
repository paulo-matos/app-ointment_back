const Validator = require('cpf-rg-validator');

module.exports = (sequelize, DataTypes) => {
    const Doctor = sequelize.define('Doctor', {
        id_doctor:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        expertise: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: 'Clínico Geral',
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                customValidator(value) {
                    if (!Validator.cpf(value)) {
                        throw new Error("CPF Inválido");
                    }
                }
            },
        },
        rg: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                customValidator(value) {
                    if (!Validator.rg(value)) {
                        throw new Error("RG Inválido");
                    }
                }
            },
        },
        birth_date: {
            type: DataTypes.DATE,
            validate: {
                isDate: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            unique: true,
        }
    });

    Doctor.associate = models => {
        Doctor.belongsTo(models.Appointment, {
            foreignKey: 'id_doctor',
            allowNull: false,
        });
    };

    return Doctor;
};