const express = require("express");
const router = express.Router();
const companiesController = require("../controllers/companies");

router.post("/", companiesController.createRandomCompanies);
router.get("/", companiesController.createRandomCompanies);

module.exports = router;
