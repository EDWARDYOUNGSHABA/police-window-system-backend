const Case = require("../../models/policeOfficerModel/caseModel");
const Notification = require("../../models/policeOfficerModel/notificationModel");

const getOfficerDashboard = async (req, res) => {

  try {

    const officerId = req.user._id;

    // Case statistics
    const totalCases = await Case.countDocuments({
      officer: officerId
    });

    const investigationCases = await Case.countDocuments({
      officer: officerId,
      status: "Under Investigation"
    });

    const closedCases = await Case.countDocuments({
      officer: officerId,
      status: "Closed"
    });

    // Recent cases
    const recentCases = await Case
      .find({ officer: officerId })
      .sort({ createdAt: -1 })
      .limit(5);

    // Recent notifications
    const recentNotifications = await Notification
      .find({ officer: officerId })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      totalCases,
      investigationCases,
      closedCases,
      recentCases,
      recentNotifications
    });

  } catch (error) {

    res.status(500).json({
      message: "Error loading dashboard",
      error: error.message
    });

  }

};

module.exports = getOfficerDashboard;