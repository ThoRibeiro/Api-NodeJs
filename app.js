const express = require("express");
const app = express();
const userRoute = require("./route/user.route");

// Permet de configurer les requetes pour l'api REST
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use("/user" , userRoute);

module.exports = app;