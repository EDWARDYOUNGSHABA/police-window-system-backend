const express = require("express");
const router = express.Router();

const assignDuty = require("../../controllers/policeStationAdminController/assignDutiesController");

router.post("/assign-duty", assignDuty);

module.exports = router;