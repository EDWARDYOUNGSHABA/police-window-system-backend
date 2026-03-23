// controllers/headquartersController/stationAdminController.js
const StationAdmin = require("../../models/headquartersModel/stationAdminModel");
const PoliceStation = require("../../models/headquartersModel/policeStationModel");

// CREATE Station Admin
const createStationAdmin = async (req, res) => {
  try {
    const { name, email, password, stationId } = req.body;

    if (!name || !email || !password || !stationId)
      return res.status(400).json({ message: "All fields are required" });

    const station = await PoliceStation.findById(stationId);
    if (!station) return res.status(404).json({ message: "Police station not found" });

    const existingAdmin = await StationAdmin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: "Admin with this email already exists" });

    const newAdmin = new StationAdmin({ name, email, password, stationId });
    await newAdmin.save();

    res.status(201).json({ message: "Station admin created", admin: newAdmin });
  } catch (error) {
    res.status(500).json({ message: "Error creating station admin", error: error.message });
  }
};

// PLACEHOLDER UPDATE
const updateStationAdmin = (req, res) => {
  res.status(501).json({ message: "Update Station Admin not implemented yet" });
};

// PLACEHOLDER DELETE
const deleteStationAdmin = (req, res) => {
  res.status(501).json({ message: "Delete Station Admin not implemented yet" });
};

module.exports = {
  createStationAdmin,
  updateStationAdmin,
  deleteStationAdmin,
};