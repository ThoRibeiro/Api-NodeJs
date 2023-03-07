const express = require("express");
const router = express.Router();

router.post("/login", (req,res,next) => {
    res.status(200).json({"message" : "login" });
});

router.post("/signin", (req,res,next) => {
    res.status(200).json({"message" : "Inscription" });
});

module.exports = router;