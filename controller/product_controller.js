// Bibliothèque and require
const bcrypt = require("bcrypt");
const productModel = require("./../model/product_model");
const jwt = require("jsonwebtoken");

// permet de créer un produit
exports.create = (req, res, next) => {
    const product = JSON.parse(req.body.product);
    productModel.create({
        ...product,
        image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}}`,
        user: req.token.email
    });
    res.status(200).json({ message: "Produit créé" });
}

exports.getAll = (req, res, next) => {
    let productList = productModel.getAll();
    res.status(200).json(productList);
}
