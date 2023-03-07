const userModel = require("./../model/user_model");

exports.getAll = (req,res,next) => {
    let userList = userModel.getAll();
    res.status(200).json(userList);
}