const express = require("express");
const router = express.Router();

const trackCases = require("../../controllers/policeStationAdminController/trackCasesController");

router.get("/track-cases", trackCases);

module.exports = router;