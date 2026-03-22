const express = require("express");
const router = express.Router();

const viewCases = require("../../controllers/policeStationAdminController/viewCasesController");

router.get("/view-cases", viewCases);

module.exports = router;