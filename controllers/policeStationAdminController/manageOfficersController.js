const Officer = require("../../models/policeStationAdminModel/officerModel");

const manageOfficers = async (req, res) => {
  try {

    const officers = await Officer.find({
      stationId: req.user.stationId
    });

    res.status(200).json(officers);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching officers",
      error: error.message
    });

  }
};

module.exports = manageOfficers;