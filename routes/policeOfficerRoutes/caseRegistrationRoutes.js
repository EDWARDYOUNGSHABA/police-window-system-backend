const express = require("express");
const router = express.Router();

const registerCase = require("../../controllers/policeOfficerController/caseRegistrationController");

// Create a new case
router.post("/", registerCase);

module.exports = router;