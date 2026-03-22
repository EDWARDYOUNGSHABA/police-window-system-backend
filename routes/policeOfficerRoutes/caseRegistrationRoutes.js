// routes/policeOfficerRoutes/caseRegistrationRoutes.js

const express = require("express");
const router = express.Router();

const registerCase = require("../../controllers/policeOfficerController/caseRegistrationController");

// Register a new case
router.post("/register-case", registerCase);

module.exports = router;