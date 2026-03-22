// routes/headquartersRoutes/headQuarterDashboardRoutes.js

const express = require("express");
const router = express.Router();

const getHeadQuarterDashboard = require("../../controllers/headquartersController/headQuarterDashboardController");

// Get headquarters dashboard statistics
router.get("/dashboard", getHeadQuarterDashboard);

module.exports = router;