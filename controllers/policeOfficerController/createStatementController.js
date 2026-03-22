const Statement = require("../../models/policeOfficerModel/statementModel");

const createStatement = async (req, res) => {

  try {

    const { caseId, statementText } = req.body;

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