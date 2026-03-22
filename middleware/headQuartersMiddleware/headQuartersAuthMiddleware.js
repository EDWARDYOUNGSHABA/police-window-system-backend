// middleware/headquartersMiddleware/headquartersAuthMiddleware.js

const jwt = require("jsonwebtoken");
const Headquarters = require("../../models/headquartersModel/headquartersAccountModel");

const headquartersAuthMiddleware = async (req, res, next) => {

    try {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                message: "Access denied. No token provided."
            });
        }

        // Remove "Bearer "
        const cleanToken = token.split(" ")[1];

        const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);

        const user = await Headquarters.findById(decoded.id);

        if (!user) {
            return res.status(404).json({
                message: "Headquarters account not found"
            });
        }

        // Check role
        if (user.role !== "headquarters") {
            return res.status(403).json({
                message: "Access denied. Headquarters only."
            });
        }

        req.user = user;

        next();

    } catch (error) {

        res.status(401).json({
            message: "Invalid or expired token",
            error: error.message
        });

    }

};

module.exports = headquartersAuthMiddleware;