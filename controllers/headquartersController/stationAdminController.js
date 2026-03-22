const StationAdmin = require("../../models/headquartersModel/stationAdminModel");

// Create Station Admin
const createStationAdmin = async (req, res) => {
  try {
    const { name, email, password, stationId } = req.body;

    if (!name || !email || !password || !stationId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAdmin = new StationAdmin({ name, email, password, stationId });
    await newAdmin.save();

    res.status(201).json({ message: "Station admin created successfully", admin: newAdmin });
  } catch (error) {
    res.status(500).json({ message: "Error creating station admin", error: error.message });
  }
};

// Update Station Admin
const updateStationAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAdmin = await StationAdmin.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAdmin) return res.status(404).json({ message: "Station admin not found" });
    res.status(200).json({ message: "Station admin updated successfully", admin: updatedAdmin });
  } catch (error) {
    res.status(500).json({ message: "Error updating station admin", error: error.message });
  }
};

// Delete Station Admin
const deleteStationAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAdmin = await StationAdmin.findByIdAndDelete(id);
    if (!deletedAdmin) return res.status(404).json({ message: "Station admin not found" });
    res.status(200).json({ message: "Station admin deleted successfully", admin: deletedAdmin });
  } catch (error) {
    res.status(500).json({ message: "Error deleting station admin", error: error.message });
  }
};

// Export all three functions
module.exports = { createStationAdmin, updateStationAdmin, deleteStationAdmin };