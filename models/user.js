const sequelize = require("../db");
const {Sequelize} = require("sequelize");

const User = defineUserModel(sequelize, Sequelize);

function defineUserModel (sequelize, DataTypes) {
    return sequelize.define('user', {
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    })
}

module.exports = User
