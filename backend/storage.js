const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files");
    },
    filename: function (req, file, cb) {

        const date = new Date()
        const todaysDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate().toString()
        const currentTime = date.getHours().toString() + "-" + date.getMinutes() + "-" + date.getSeconds();
        const filename = todaysDate + "_" + currentTime + "_" + req.body.title
        req.filename = filename

        // cb(null, todaysDate + "_" + currentTime + "_" + req.body.title + ".pdf");
        cb(null, req.filename + ".pdf");
    },
});


const upload = multer({ storage: storage })

module.exports = { upload }