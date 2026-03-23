const Case = require("../../models/policeOfficerModel/caseModel");

const viewCases = async (req, res) => {

  try {

    const cases = await Case
      .find({ stationId: req.user.stationId })
      .populate("officer");

    res.status(200).json(cases);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching cases",
      error: error.message
    });

  }

};

module.exports = viewCases;