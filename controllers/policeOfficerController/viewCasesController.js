const Case = require("../../models/policeOfficerModel/caseModel");

const viewCases = async (req, res) => {
  try {
    const { stationId } = req.body;

    if (!stationId) {
      return res.status(400).json({
        message: "stationId is required"
      });
    }

    const cases = await Case
      .find({ stationId })
      .populate("officer", "name badgeNumber")
      .sort({ createdAt: -1 });

    res.status(200).json(cases);

  } catch (error) {
    res.status(500).json({
      message: "Error retrieving cases",
      error: error.message
    });
  }
};

module.exports = viewCases;