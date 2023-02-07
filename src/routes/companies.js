const express = require("express");
const router = express.Router();
const companiesController = require("../controllers/Companies");

router.get("/", companiesController.getAllCompanies);
router.get("/build", companiesController.getCompaniesFromApi);
router.post("/", companiesController.createCompany);
router.delete("/", companiesController.deleteCompanyById);

module.exports = router;
