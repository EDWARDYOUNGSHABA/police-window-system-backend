const express = require("express");
const router = express.Router();
const {
  createAccount,
  updateAccount,
  deleteAccount
} = require("../../controllers/headquartersController/headquartersAccountController");

// Create HQ account
router.post("/", createAccount);

// Update HQ account
router.put("/:id", updateAccount);

// Delete HQ account
router.delete("/:id", deleteAccount);

module.exports = router;