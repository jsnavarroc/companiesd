const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Companies = sequelize.define(
  "company",
  {
    nit: {
      type: Sequelize.STRING,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      unique: false,
    },
    address: {
      type: Sequelize.STRING,
      unique: false,
    },
    mobile_phone: {
      type: Sequelize.STRING,
      unique: false,
    },
    url: {
      type: Sequelize.STRING,
      unique: false,
    },
    manager: {
      type: Sequelize.STRING,
      unique: false,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { timestamps: false }
);

module.exports = Companies;
