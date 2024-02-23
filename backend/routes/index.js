const express = require('express');
const userRouter = require('./user.js');
const reportsRouter = require('./reports.js');

const router = express.Router();

router.use("/user", userRouter)
router.use("/report", reportsRouter)






module.exports = router;







