const express = require("express");
const router = express.Router();

const createOfficer = require("../../controllers/policeStationAdminController/createOfficersController");

router.post("/create-officer", createOfficer);

module.exports = router;