const CompaniesRepository = require("../repository/Companies");

class CompaniesController {
  async getAllCompanies(_, res) {
    try {
      const data = await CompaniesRepository.getAllCompanies();
      res.status(201).json(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getCompaniesFromApi(_, res) {
    try {
      const data = await CompaniesRepository.getCompaniesFromApi();
      res.status(201).json({ response: data });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  async createCompany(req, res) {
    try {
      const data = await CompaniesRepository.createCompany(req.body);
      res.status(201).json({ response: data });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
  async deleteCompanyById(req, res) {
    try {
      const data = await CompaniesRepository.deleteCompanyById(req.query.id);
      res.status(201).json({ response: data });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new CompaniesController();
