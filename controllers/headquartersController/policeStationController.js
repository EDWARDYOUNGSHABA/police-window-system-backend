const PoliceStation = require("../../models/headquartersModel/policeStationModel");

const createPoliceStation = async (req, res) => {
  try {
    const { stationName, location, contactNumber } = req.body || {};

    if (!stationName || !location) {
      return res.status(400).json({ message: "stationName and location are required" });
    }

    const newStation = new PoliceStation({
      stationName,
      location,
      contactNumber
    });

    await newStation.save();

    res.status(201).json({
      message: "Police station created successfully",
      station: newStation
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating police station",
      error: error.message
    });
  }
};

module.exports = createPoliceStation;