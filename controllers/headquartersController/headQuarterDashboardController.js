const PoliceStation = require("../../models/headquartersModel/policeStationModel");
const Case = require("../../models/policeOfficerModel/caseModel");
const Officer = require("../../models/policeStationAdminModel/officerModel");

const getHeadQuarterDashboard = async (req, res) => {
  try {

    const totalStations = await PoliceStation.countDocuments();
    const totalCases = await Case.countDocuments();
    const totalOfficers = await Officer.countDocuments();

    res.status(200).json({
      totalStations,
      totalCases,
      totalOfficers
    });

  } catch (error) {

    res.status(500).json({
      message: "Error fetching dashboard data",
      error: error.message
    });

  }
};

module.exports = getHeadQuarterDashboard;