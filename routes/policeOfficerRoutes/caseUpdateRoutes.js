const express = require("express");
const router = express.Router();

const updateCase = require("../../controllers/policeOfficerController/caseUpdateController");

// Update case details (WITH ID PARAM)
router.put("/:id", updateCase);

module.exports = router;