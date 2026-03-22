const express = require("express");
const router = express.Router();
const {
  createStationAdmin,
  updateStationAdmin,
  deleteStationAdmin
} = require("../../controllers/headquartersController/stationAdminController");

// Create Station Admin
router.post("/", createStationAdmin);

// Update Station Admin
router.put("/:id", updateStationAdmin);

// Delete Station Admin
router.delete("/:id", deleteStationAdmin);

module.exports = router;