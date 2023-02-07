const CompaniesModel = require("../models/Companies");

class CompaniesController {
  async createRandomCompanies(req, res) {
    try {
      const { stations, name } = req.body;
      const response = await CompaniesModel.create({
        stations: JSON.stringify(stations),
        name,
      });
      res.status(201).json(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAllCompanies(req, res) {
    try {
      const response = await CompaniesModel.findAll();
      res.status(200).json({ response });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new CompaniesController();
