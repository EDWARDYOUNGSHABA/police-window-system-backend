const express = require("express");
const router = express.Router();

const getDashboard = require("../../controllers/policeStationAdminController/policeStationDashboardController");

router.get("/", getDashboard);

module.exports = router;