const multer = require("multer");

const MIME_TYPES = {
    'images/jpg' : 'jpg',
    'images/jpeg' : 'jpeg',
    'images/jpg' : 'jpg',
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
         callback(null, "img")
    },
    filename : (req, file, callback) => {
        callback(null, file.originalname.split(" ").join('_') + Date.now() + "." + MIME_TYPES[file.mimetype]);
}})

module.exports = multer({storage: storage}).single('image');