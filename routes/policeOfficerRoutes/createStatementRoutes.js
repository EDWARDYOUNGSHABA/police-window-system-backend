const express = require("express");
const router = express.Router();

const createStatement = require("../../controllers/policeOfficerController/createStatementController");

// CREATE STATEMENT
router.post("/", createStatement);

module.exports = router;