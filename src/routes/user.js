const express = require("express");
const router = express.Router();
const UserController = require("../controllers/User");

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/email", UserController.getUserByEmail);
router.post("/", UserController.createUsers);
router.delete("/", UserController.deleteUserById);

module.exports = router;
