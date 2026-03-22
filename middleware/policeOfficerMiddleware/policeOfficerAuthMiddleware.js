// middleware/policeOfficerMiddleware/policeOfficerAuthMiddleware.js

const jwt = require("jsonwebtoken");
const Officer = require("../../models/policeStationAdminModel/officerModel");

const policeOfficerAuthMiddleware = async (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Access denied. No token provided."
      });
    }

    // Remove "Bearer "
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find officer
    const officer = await Officer.findById(decoded.id);

    if (!officer) {
      return res.status(404).json({
        message: "Officer not found"
      });
    }

    // Check role
    if (officer.role !== "officer") {
      return res.status(403).json({
        message: "Access denied. Police officers only."
      });
    }

    // Attach officer to request
    req.user = officer;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid or expired token",
      error: error.message
    });

  }
};

module.exports = policeOfficerAuthMiddleware;