const Officer = require("../../models/policeStationAdminModel/officerModel");
const Case = require("../../models/policeOfficerModel/caseModel");

const getStationDashboard = async (req, res) => {

  try {

    const stationId = req.user.stationId;

    // Total officers in this station
    const totalOfficers = await Officer.countDocuments({
      stationId
    });

    // Total cases in this station
    const totalCases = await Case.countDocuments({
      stationId
    });

    // Cases under investigation
    const investigationCases = await Case.countDocuments({
      stationId,
      status: "Under Investigation"
    });

    // Closed cases
    const closedCases = await Case.countDocuments({
      stationId,
      status: "Closed"
    });

    // Recent cases (last 5)
    const recentCases = await Case
      .find({ stationId })
      .populate("officer", "name badgeNumber")
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      stationId,
      totalOfficers,
      totalCases,
      investigationCases,
      closedCases,
      recentCases
    });

  } catch (error) {

    res.status(500).json({
      message: "Error loading station dashboard",
      error: error.message
    });

  }

};

module.exports = getStationDashboard;