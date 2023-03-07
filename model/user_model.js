const userList = require("./../data/user.json");
const fs = require("fs");

exports.create = (user) => {
    userList.push(user);
    fs.writeFileSync("data/user.json", JSON.stringify(userList, null, 4));
}

exports.getAll = () => {

}

exports.getOne = () => {

}

exports.update = () => {

}

exports.delete = () => {

}
