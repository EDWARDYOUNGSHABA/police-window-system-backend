const express = require("express");
const router = express.Router();

const getDashboard = require("../../controllers/policeStationAdminController/policeStationDashboardController");

router.get("/dashboard", getDashboard);

module.exports = router;