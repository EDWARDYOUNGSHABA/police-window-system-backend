const Headquarters = require("../../models/headquartersModel/headquartersAccountModel");
const StationAdmin = require("../../models/headquartersModel/stationAdminModel");
const Officer = require("../../models/policeStationAdminModel/officerModel");

const generateToken = require("../../utils/generateToken");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const models = [
      { model: Headquarters, role: "headquarters" },
      { model: StationAdmin, role: "stationAdmin" },
      { model: Officer, role: "officer" }
    ];

    let user = null;
    let role = null;

    for (const item of models) {
      user = await item.model.findOne({ email });
      if (user) {
        role = item.role;
        break;
      }
    }

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const token = generateToken({
      id: user._id,
      role
    });

    res.status(200).json({
      message: "Login successful",
      token,
      role,
      userId: user._id
    });

  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message
    });
  }
};

module.exports = loginController;