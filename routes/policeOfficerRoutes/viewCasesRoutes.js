// routes/policeOfficerRoutes/viewCasesRoutes.js

const express = require("express");
const router = express.Router();

const viewCases = require("../../controllers/policeOfficerController/viewCasesController");

// View cases assigned to officer
router.get("/view-cases", viewCases);

module.exports = router;