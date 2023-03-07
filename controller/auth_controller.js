exports.signin = (req, res, next) => {
    console.log(req.body);
    res.status(200).json({"message": "Inscription"})
}

exports.login = (req, res, next) => {

}