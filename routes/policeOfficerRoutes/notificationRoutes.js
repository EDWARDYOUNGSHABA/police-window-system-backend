// routes/policeOfficerRoutes/notificationRoutes.js

const express = require("express");
const router = express.Router();

const getNotifications = require("../../controllers/policeOfficerController/notificationController");

// Get officer notifications
router.get("/notifications", getNotifications);

module.exports = router;