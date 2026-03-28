const Notification = require("../../models/policeOfficerModel/notificationModel");

const getNotifications = async (req, res) => {
  try {

    const officerId = req.query.officerId || req.body.officerId;

    if (!officerId) {
      return res.status(400).json({
        message: "officerId is required"
      });
    }

    const notifications = await Notification
      .find({ officer: officerId })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      count: notifications.length,
      notifications
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error fetching notifications",
      error: error.message
    });
  }
};

module.exports = getNotifications;