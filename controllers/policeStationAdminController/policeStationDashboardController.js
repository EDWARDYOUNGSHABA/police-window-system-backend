const Officer = require("../../models/policeStationAdminModel/officerModel");
const Case = require("../../models/policeOfficerModel/caseModel");

const getStationDashboard = async (req, res) => {
  try {

    const { stationId } = req.query;

    if (!stationId) {
      return res.status(400).json({
        message: "stationId is required"
      });
    }

    // Total officers
    const totalOfficers = await Officer.countDocuments({ stationId });

    // Total cases
    const totalCases = await Case.countDocuments({ stationId });

    // Investigation cases
    const investigationCases = await Case.countDocuments({
      stationId,
      status: "Under Investigation"
    });

    // Closed cases
    const closedCases = await Case.countDocuments({
      stationId,
      status: "Closed"
    });

    // Recent cases
    const recentCases = await Case
      .find({ stationId })
      .populate("officer", "name badgeNumber")
      .sort({ createdAt: -1 })
      .limit(5);

    return res.status(200).json({
      stationId,
      totalOfficers,
      totalCases,
      investigationCases,
      closedCases,
      recentCases
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error loading station dashboard",
      error: error.message
    });
  }
};

module.exports = getStationDashboard;