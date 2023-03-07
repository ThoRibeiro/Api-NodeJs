const express = require("express");
const router = express.Router();
const authController = require("./../controller/auth_controller");

router.post("/login", (req,res,next) => {
    res.status(200).json({"message" : "login" });
});

router.post("/signin", authController.signin);

module.exports = router;