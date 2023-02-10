const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("./connection");
const indexRouter = require("./routes/index");
const companies = require("./routes/companies");
const user = require("./routes/user");
const port = process.env.PORT || 3000;
const app = express();
app.use(
  cors({
    methods: "PUT, GET, HEAD, POST, DELETE, OPTIONS, PATCH",
  })
);

app.options("*", cors());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// view engine setup
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/companies", companies);
app.use("/user", user);
app.use("/", indexRouter);

module.exports = app;
