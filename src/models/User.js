const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Users = sequelize.define(
  "company",
  {
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      unique: false,
    },
    rol: {
      type: Sequelize.STRING,
      unique: false,
    },
  },
  { timestamps: false }
);

module.exports = Users;
