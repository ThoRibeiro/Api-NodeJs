const bcrypt = require("bcrypt");
const userModel = require("./../model/user_model");

// permet de s'inscrire et de hash le mdp
exports.signin = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        try{
            userModel.create({ 
                email: req.body.email,
                password: hash
            });
            res.status(201).json({ message : "Utilisateur créé" });

        } catch (error){
            res.status(500).json(error);
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
};

exports.login = (req, res, next) => {

};
