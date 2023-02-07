const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Companies = require("./models/Companies");

return sequelize
  .authenticate()
  .then((result) => {
    console.log(`SQLite successfully connected!`);
    return Companies.sync();
  })
  .then((result) => {
    console.log(`Company table created`);
    return result;
  })
  .catch((error) => {
    console.error("Unable to connect to SQLite database:", error);
  });
