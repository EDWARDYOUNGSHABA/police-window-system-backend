const Statement = require("../../models/policeOfficerModel/statementModel");
const Case = require("../../models/policeOfficerModel/caseModel");

const createStatement = async (req, res) => {
  try {
    const { caseId, statementText, officerId, stationId } = req.body;

    if (!caseId || !statementText || !officerId || !stationId) {
      return res.status(400).json({
        message: "caseId, statementText, officerId and stationId are required"
      });
    }

    const caseRecord = await Case.findOne({
      _id: caseId,
      stationId: stationId
    });

    if (!caseRecord) {
      return res.status(404).json({
        message: "Case not found for this station"
      });
    }

    const newStatement = new Statement({
      caseId,
      officer: officerId,
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