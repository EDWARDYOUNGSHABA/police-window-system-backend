// routes/policeOfficerRoutes/caseUpdateRoutes.js

const express = require("express");
const router = express.Router();

const updateCase = require("../../controllers/policeOfficerController/caseUpdateController");

// Update case details
router.put("/update-case/:id", updateCase);

module.exports = router;