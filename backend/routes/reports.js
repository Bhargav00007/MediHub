const express = require("express")
const { User } = require("../db.js");
const dotenv = require('dotenv');
const { authMiddleware } = require("../middleware.js");
const { upload } = require("../storage.js");
dotenv.config();


const router = express.Router();




router.post("/upload", authMiddleware, upload.single("file"), async (req, res) => {
    try {
        const date = new Date()
        const todaysDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate().toString()
        const currentTime = date.getHours().toString() + "-" + date.getMinutes() + "-" + date.getSeconds();
        const uploadDate = todaysDate + "_" + currentTime

        const userData = await User.findByIdAndUpdate(
            req.userId,
            {
                $push: {
                    pdfList: {
                        title: req.body.title,
                        description: req.body.description,
                        tags: req.body.tags,
                        reportDate: req.body.reportDate,
                        uploadDate: uploadDate,
                        filename: req.body.filename
                    }
                }
            },
            { new: true } // to return the updated document
        );

        if (!userData) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ msg: "PDF added successfully", userData });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";

    try {
        // Find the user document by ID
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Filter the pdfList array based on tags containing the filter string
        const filteredPdfs = user.pdfList.filter(pdf => pdf.tags.some(tag => tag.includes(filter)));

        return res.json({ allPdfs: filteredPdfs });
    } catch (e) {
        console.error("Error:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;

