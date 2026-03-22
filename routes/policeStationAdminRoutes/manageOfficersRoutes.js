const express = require("express");
const router = express.Router();

const manageOfficers = require("../../controllers/policeStationAdminController/manageOfficersController");

router.get("/officers", manageOfficers);

module.exports = router;