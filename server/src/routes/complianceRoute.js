const express = require("express");
const { fetchComplianceData } = require("../controllers/complianceController");
const errorMiddleware = require("../middleware/errorMiddleware");

const router = express.Router();

router.get("/compliance-data", fetchComplianceData);

router.use(errorMiddleware);

module.exports = router;
