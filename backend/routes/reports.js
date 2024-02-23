const express = require("express")
const { User } = require("../db.js");
const dotenv = require('dotenv');
const { authMiddleware } = require("../middleware.js");
const { upload } = require("../storage.js");
const fs = require('fs');
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
                        filename: req.filename
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




const path = require('path');

router.delete("/delete/:pdf", authMiddleware, async (req, res) => {
    const pdf = req.params.pdf;

    try {
        const filePath = path.join(__dirname, "../files", pdf + ".pdf"); // Construct full file path
        fs.unlinkSync(filePath); // Synchronously delete the file

        // Remove the PDF from the user's pdfList array
        const userData = await User.findByIdAndUpdate(
            req.userId,
            {
                $pull: {
                    pdfList: { filename: pdf }
                }
            },
            { new: true } // to return the updated document
        );

        if (!userData) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "PDF deleted successfully" });
    } catch (error) {
        if (error.code === 'ENOENT') {
            // File not found
            res.status(404).json({ error: "PDF not found" });
        } else {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
});



router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";
    const type = req.query.type || "";

    try {
        // Find the user document by ID
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Filter PDFs based on type and filter
        const filteredPdfs = user.pdfList.filter(pdf => {
            // Check if the PDF matches the specified type
            const isTypeMatch = type ? pdf.type.includes(type) : true;
            // Check if the PDF matches the filter string
            const isFilterMatch = filter ? pdf.tags.some(tag => tag.includes(filter)) : true;

            // Return true only if both type and filter conditions are met
            return isTypeMatch && isFilterMatch;
        });

        return res.json({ allPdfs: filteredPdfs });
    } catch (e) {
        console.error("Error:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router;


