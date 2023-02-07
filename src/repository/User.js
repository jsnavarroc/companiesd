const Users = require("../models/User");

class CompaniesRepository {
  async getAllUsers() {
    const users = await Users.findAll();
    return users;
  }
  async getUserById(id) {
    const user = await Users.findOne({
      raw: true,
      where: { id },
    });
    return user;
  }
  async getUserById(email) {
    const user = await Users.findOne({
      raw: true,
      where: { email },
    });
    return user;
  }
  async createUsers(user) {
    const existingUser = await Users.findOne({
      raw: true,
      where: { email: user.email },
    });
    if (existingUser) {
      throw new Error(`User with this email: ${user.email} already exists`);
    }
    const newUser = await Users.create(user);
    return newUser;
  }

  async deleteUserById(id) {
    const user = await Users.destroy({
      where: { id },
    });
    return user;
  }
}

module.exports = new CompaniesRepository();
