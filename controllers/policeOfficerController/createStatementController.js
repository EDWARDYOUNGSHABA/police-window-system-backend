const Statement = require("../../models/policeOfficerModel/statementModel");
const Case = require("../../models/policeOfficerModel/caseModel");

const createStatement = async (req, res) => {

  try {

    const { caseId, statementText } = req.body;

    const caseRecord = await Case.findOne({
      _id: caseId,
      stationId: req.user.stationId
    });

    if (!caseRecord) {
      return res.status(404).json({
        message: "Case not found for this station"
      });
    }

    const newStatement = new Statement({
      caseId,
      officer: req.user._id,
      statementText
    });

    await newStatement.save();

    res.status(201).json({
      message: "Statement created successfully",
      statement: newStatement
    });

  } catch (error) {

    res.status(500).json({
      message: "Error creating statement",
      error: error.message
    });

  }

};

module.exports = createStatement;