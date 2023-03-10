const express = require("express");
const path = require("path")
const userRoute = require("./route/user_route");
const authRoute = require("./route/auth_route");
const productRoute = require("./route/product_route");

const app = express();

app.use(express.json());

// Permet de configurer les requetes pour l'api REST
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

// Permet d'afficher le route
app.use('/images', express.static(path.join(__dirname, "images")));
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/product", productRoute)

module.exports = app;
