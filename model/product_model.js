const productList = require("./../data/product.json");
const fs = require("fs");


/**
 * Create and get all product in json 
 * @param {*} product 
 */ 

exports.create = (product) => {
    productList.push(product);
    fs.writeFileSync("data/product.json", JSON.stringify(productList, null, 4));
}

exports.getAll = () => {
    return productList;
}

exports.getOne = (name) => {
    let product = productList.find(product => user.name === name);
    if (product) {
        return product;
    } else {
        throw new Error("Produit non trouvé");
    }
}

exports.update = () => {

}

exports.delete = () => {

}