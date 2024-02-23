const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files");
    },
    filename: function (req, file, cb) {

        const date = new Date()
        const todaysDate = date.getDate().toString() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        const currentTime = date.getHours().toString() + "-" + date.getMinutes() + "-" + date.getSeconds();
        cb(null, todaysDate + "_" + currentTime + "_" + file.originalname);
    },
});


const upload = multer({ storage: storage })

module.exports = { upload }