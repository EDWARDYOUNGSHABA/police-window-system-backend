// middleware/policeStationAdminMiddleware/policeStationAdminAuthMiddleware.js

const jwt = require("jsonwebtoken");
const StationAdmin = require("../../models/headquartersModel/stationAdminModel");

const stationAdminAuth = async (req, res, next) => {

  try {

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await StationAdmin.findById(decoded.id);

    if (!admin) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = admin;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid token",
      error: error.message
    });

  }

};

module.exports = stationAdminAuth;