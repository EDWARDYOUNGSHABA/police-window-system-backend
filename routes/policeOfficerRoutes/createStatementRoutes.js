// routes/policeOfficerRoutes/createStatementRoutes.js

const express = require("express");
const router = express.Router();

const createStatement = require("../../controllers/policeOfficerController/createStatementController");

// Create statement
router.post("/create-statement", createStatement);

module.exports = router;