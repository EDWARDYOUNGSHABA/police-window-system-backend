const Officer = require("../../models/policeStationAdminModel/officerModel");
const Case = require("../../models/policeOfficerModel/caseModel");

const getStationDashboard = async (req, res) => {

  try {

    const totalOfficers = await Officer.countDocuments();
    const totalCases = await Case.countDocuments();

    res.status(200).json({
      totalOfficers,
      totalCases
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

module.exports = getStationDashboard;