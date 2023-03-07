const express = require("express");
const app = express();

app.use((req,res,next) => {
    console.log("c'est OK");
    res.status(200).json({"message" : "OK"});
});

module.exports = app;