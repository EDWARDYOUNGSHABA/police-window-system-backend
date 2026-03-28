const Officer = require("../../models/policeStationAdminModel/officerModel");

const createOfficer = async (req, res) => {
  try {

    const { name, badgeNumber, email, password, stationId } = req.body;

    if (!name || !badgeNumber || !email || !password || !stationId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOfficer = new Officer({
      name,
      badgeNumber,
      email,
      password,
      stationId   // ✅ from body
    });

    await newOfficer.save();

    res.status(201).json({
      message: "Officer created successfully",
      officer: newOfficer
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating officer",
      error: error.message
    });
  }
};

module.exports = createOfficer;