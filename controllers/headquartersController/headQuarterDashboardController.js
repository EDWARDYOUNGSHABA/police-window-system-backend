const PoliceStation = require("../../models/headquartersModel/policeStationModel");
const Case = require("../../models/policeOfficerModel/caseModel");
const Officer = require("../../models/policeStationAdminModel/officerModel");

const getHeadQuarterDashboard = async (req, res) => {
  try {

    // System totals
    const totalStations = await PoliceStation.countDocuments();
    const totalCases = await Case.countDocuments();
    const totalOfficers = await Officer.countDocuments();

    // Case statistics
    const investigationCases = await Case.countDocuments({
      status: "Under Investigation"
    });

    const closedCases = await Case.countDocuments({
      status: "Closed"
    });

    // Recent cases across all stations
    const recentCases = await Case
      .find()
      .populate("officer", "name badgeNumber")
      .populate("stationId", "stationName location")
      .sort({ createdAt: -1 })
      .limit(5);

    // Recently created stations
    const recentStations = await PoliceStation
      .find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      totalStations,
      totalOfficers,
      totalCases,
      investigationCases,
      closedCases,
      recentCases,
      recentStations
    });

  } catch (error) {

    res.status(500).json({
      message: "Error fetching dashboard data",
      error: error.message
    });

  }
};

module.exports = getHeadQuarterDashboard;