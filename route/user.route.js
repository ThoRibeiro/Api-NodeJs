const express = require("express");
const router = express.Router();

router.get('/profile', (req,res,next) => {
    res.status(200).json({ "message" : "profile" });
});

module.exports = router;