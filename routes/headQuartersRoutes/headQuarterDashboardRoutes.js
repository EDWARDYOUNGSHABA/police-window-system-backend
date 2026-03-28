// routes/headquartersRoutes/headQuarterDashboardRoutes.js
const express = require("express");
const router = express.Router();

const getHeadQuarterDashboard = require("../../controllers/headquartersController/headQuarterDashboardController");

router.get("/", getHeadQuarterDashboard); // <-- just "/"

module.exports = router;