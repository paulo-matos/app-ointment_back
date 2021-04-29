const Validator = require('cpf-rg-validator');

module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
        id_patient:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                customValidator(value) {
                    if (value == "") {
                        throw new Error("Empty Name");
                    }
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                customValidator(value) {
                    if (!Validator.cpf(value)) {
                        throw new Error("CPF not valid");
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
                        throw new Error("RG not valid");
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
            validate: {
                customValidator(value) {
                    if (value == "") {
                        throw new Error("Empty Password");
                    }
                }
            }
        }  
    });

    Patient.associate = models => {
        Patient.hasMany(models.Appointment, {
            foreignKey: 'id_patient',
            allowNull: false,
        });
    };

    return Patient;
};