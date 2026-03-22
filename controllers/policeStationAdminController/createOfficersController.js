const Officer = require("../../models/policeStationAdminModel/officerModel");

const createOfficer = async (req, res) => {
  try {

    const newOfficer = new Officer(req.body);

    await newOfficer.save();

    res.status(201).json({
      message: "Officer created successfully",
      officer: newOfficer
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = createOfficer;