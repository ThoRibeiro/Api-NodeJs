const express = require("express");
const router = express.Router();
const authController = require("./../controller/auth_controller");

router.post("/login", authController.login);

router.post("/signin", authController.signin);

module.exports = router;