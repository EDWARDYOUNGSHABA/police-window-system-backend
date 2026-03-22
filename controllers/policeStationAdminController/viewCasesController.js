const Case = require("../../models/policeOfficerModel/caseModel");

const viewCases = async (req, res) => {
  try {

    const cases = await Case.find().populate("officer");

    res.status(200).json(cases);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = viewCases;