const Case = require("../../models/policeOfficerModel/caseModel");

const viewCases = async (req, res) => {
  try {

    const { stationId } = req.query;

    if (!stationId) {
      return res.status(400).json({
        message: "stationId is required"
      });
    }

    const cases = await Case
      .find({ stationId })
      .populate("officer");

    if (!cases || cases.length === 0) {
      return res.status(404).json({
        message: "No cases found for this station"
      });
    }

    res.status(200).json({
      count: cases.length,
      cases
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching cases",
      error: error.message
    });
  }
};

module.exports = viewCases;