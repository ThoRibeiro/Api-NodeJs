const express = require("express");
const router = express.Router();
const userController = require("./../controller/user_controller");

router.get('/profile', (req, res, next) => {
    res.status(200).json({ "message": "profile" });
});

router.get("/", userController.getAll);

module.exports = router;