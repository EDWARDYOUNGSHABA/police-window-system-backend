const express = require("express");
const router = express.Router();

const trackCases = require("../../controllers/policeStationAdminController/trackCasesController");

router.get("/", trackCases);

module.exports = router;