const bcrypt = require("bcrypt");

exports.signin = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        res.status(200).json({ "hash": hash })
    })
    .catch(error => {
        res.status(500).json(error)
    })
};
exports.login = (req, res, next) => {

};
