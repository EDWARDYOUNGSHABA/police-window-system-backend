const mongoose = require("mongoose");
const Officer = require("../../models/policeStationAdminModel/officerModel");

const manageOfficers = async (req, res) => {
  try {

    const { stationId } = req.query;

    if (!stationId) {
      return res.status(400).json({ message: "stationId is required" });
    }

    const officers = await Officer.find({
      stationId: new mongoose.Types.ObjectId(stationId)
    });

    if (officers.length === 0) {
      return res.status(404).json({
        message: "No officers found for this station"
      });
    }

    res.status(200).json({
      count: officers.length,
      officers
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching officers",
      error: error.message
    });
  }
};

module.exports = manageOfficers;