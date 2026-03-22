const express = require("express");
const router = express.Router();

const createPoliceStation = require("../../controllers/headquartersController/policeStationController");

// POST /api/hq/stations
router.post("/", createPoliceStation);

module.exports = router;