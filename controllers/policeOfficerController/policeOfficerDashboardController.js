const Case = require("../../models/policeOfficerModel/caseModel");

const getOfficerDashboard = async (req, res) => {

  try {

    const totalCases = await Case.countDocuments({
      officer: req.user._id
    });

    const openCases = await Case.countDocuments({
      officer: req.user._id,
      status: "Open"
    });

    const closedCases = await Case.countDocuments({
      officer: req.user._id,
      status: "Closed"
    });

    res.status(200).json({
      totalCases,
      openCases,
      closedCases
    });

  } catch (error) {

    res.status(500).json({
      message: "Error loading dashboard",
      error: error.message
    });

  }

};

module.exports = getOfficerDashboard;