// routes/policeStationAdminRoutes/officerRoutes.js

const express = require("express");
const router = express.Router();

const createOfficer = require("../../controllers/policeStationAdminController/createOfficersController");
const manageOfficers = require("../../controllers/policeStationAdminController/manageOfficersController");

// CREATE
router.post("/", createOfficer);

// GET by station
router.get("/", manageOfficers);

module.exports = router;