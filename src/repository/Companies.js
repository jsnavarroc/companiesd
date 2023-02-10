const axios = require("axios");
const Companies = require("../models/Companies");

class CompaniesRepository {
  async getAllCompanies() {
    const companies = await Companies.findAll();
    return companies;
  }

  async getCompaniesFromApi() {
    const response = await axios.get(
      "https://api.json-generator.com/templates/FmnJCH5HwlMM/data",
      { headers: { Authorization: `Bearer ${process.env.API_TOKEN}` } }
    );
    await Companies.bulkCreate(response.data);
    const data = await this.getAllCompanies();
    return data;
  }

  async createCompany(company) {
    const existingCompany = await Companies.findOne({
      raw: true,
      where: { nit: company.nit },
    });
    if (existingCompany) {
      throw new Error(`Company with this nit: ${company.nit} already exists`);
    }
    const newCompany = await Companies.create(company);
    return newCompany;
  }

  async deleteCompanyById(id) {
    const company = await Companies.destroy({
      where: { id },
    });
    return company;
  }

  async updateCompanyById(company) {
    return await Companies.update(company, {
      where: { id: company.id },
    });
  }
}

module.exports = new CompaniesRepository();
