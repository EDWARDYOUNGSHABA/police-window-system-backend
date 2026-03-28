// routes/policeOfficerRoutes/policeOfficerDashboardRoutes.js

const express = require("express");
const router = express.Router();

const getOfficerDashboard = require("../../controllers/policeOfficerController/policeOfficerDashboardController");

// Officer dashboard statistics
router.get("/", getOfficerDashboard);

module.exports = router;