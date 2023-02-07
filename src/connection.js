const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Companies = require("./models/Companies");
const Users = require("./models/User");

return sequelize
  .authenticate()
  .then((result) => {
    console.log(`SQLite successfully connected!`);
    return Companies.sync();
  })
  .then((result) => {
    return Users.sync();
  })
  .then((result) => {
    console.log(`Company & User table created`);
    return result;
  })
  .catch((error) => {
    console.error("Unable to connect to SQLite database:", error);
  });
