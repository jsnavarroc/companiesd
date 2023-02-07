const UserRepository = require("../repository/User");

class UserController {
  async getAllUsers(_, res) {
    try {
      const data = await UserRepository.getAllUsers();
      res.status(201).json({ response: data });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  async getUserById(req, res) {
    try {
      const data = await UserRepository.getUserById(req.query.id);
      res.status(201).json({ response: data });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  async getUserByEmail(req, res) {
    try {
      const data = await UserRepository.getUserByEmail(req.query.email);
      res.status(201).json({ response: data });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  async createUsers(req, res) {
    try {
      const data = await UserRepository.createUsers(req.body);
      res.status(201).json({ response: data });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  async deleteUserById(req, res) {
    try {
      const data = await UserRepository.deleteUserById(req.query.id);
      res.status(201).json({ response: data });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
