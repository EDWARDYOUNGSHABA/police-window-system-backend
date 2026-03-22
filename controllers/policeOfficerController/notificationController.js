const Notification = require("../../models/policeOfficerModel/notificationModel");

const getNotifications = async (req, res) => {

  try {

    const notifications = await Notification.find({
      officer: req.user._id
    }).sort({ createdAt: -1 });

    res.status(200).json(notifications);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching notifications",
      error: error.message
    });

  }

};

module.exports = getNotifications;