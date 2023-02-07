const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const BlueBird = require("bluebird");

const Companies = require("../models/Companies");

chai.use(chaiHttp);

const setup = (...companies) => {
  return BlueBird.mapSeries(companies, (company) => {
    return chai
      .request(server)
      .post("/companies")
      .send(company)
      .then((response) => {
        return response.body;
      });
  });
};

describe("Companies API", () => {
  const company_1 = {
    nit: "63e182a710eb4af56583a351",
    url: "https://www.iuju.me/",
    name: "Extremo",
    address: "57 Covert Street, Aurora, Puerto Rico",
    manager: "larsen_lowery@extremo.degree",
    mobile_phone: "(+12)29995730459",
  };
  const company_2 = {
    nit: "63e182a7500d853833e18d79",
    url: "https://www.iuju.me/",
    name: "Gology",
    address: "84 Freeman Street, Weeksville, Oregon",
    manager: "isabelle_william@gology.shoes",
    mobile_phone: "(+16)2439773668",
  };
  beforeEach(async () => {
    await Companies.sync();
  });
  afterEach(async () => {
    await Companies.drop();
  });

  it("should create company", async () => {
    const response = await chai
      .request(server)
      .post("/companies")
      .send(company_1);
    response.should.have.status(201);
    response.body.should.eql({
      ...company_1,
      id: 1,
    });
  });

  it("should fetch all the companies", async () => {
    const results = await setup(company_1, company_2);
    const response = await chai.request(server).get("/companies");
    response.should.have.status(200);
    response.body.response.should.eql(results);
  });
});
