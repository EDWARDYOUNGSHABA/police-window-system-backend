const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// ===== COMMON MIDDLEWARE =====
const authMiddleware = require("./middleware/commonMiddleware/authMiddleware");
const roleMiddleware = require("./middleware/commonMiddleware/roleMiddleware");

// ================= AUTH ROUTES =================
const loginRoutes = require("./routes/authRoutes/loginRoutes");
const logoutRoutes = require("./routes/authRoutes/logoutRoutes");

app.use("/api/auth/login", loginRoutes);
app.use("/api/auth/logout", logoutRoutes);

// ================= HEADQUARTERS =================
const createPoliceStationRoutes = require("./routes/headquartersRoutes/policeStationRoutes");
const stationAdminRoutes = require("./routes/headquartersRoutes/stationAdminRoutes");
const headquartersDashboardRoutes = require("./routes/headquartersRoutes/headQuarterDashboardRoutes");
const headquartersAccountRoutes = require("./routes/headQuartersRoutes/headquartersAccountRoutes");

app.use("/api/hq", authMiddleware, roleMiddleware("headquarters"));

app.use("/api/hq/stations", createPoliceStationRoutes);
app.use("/api/hq/admins", stationAdminRoutes);
app.use("/api/hq/dashboard", headquartersDashboardRoutes);
app.use("/api/hq/accounts", headquartersAccountRoutes);

// ================= POLICE OFFICER =================
const caseRegistrationRoutes = require("./routes/policeOfficerRoutes/caseRegistrationRoutes");
const caseUpdateRoutes = require("./routes/policeOfficerRoutes/caseUpdateRoutes");
const createStatementRoutes = require("./routes/policeOfficerRoutes/createStatementRoutes");
const notificationRoutes = require("./routes/policeOfficerRoutes/notificationRoutes");
const policeOfficerDashboardRoutes = require("./routes/policeOfficerRoutes/policeOfficerDashboardRoutes");
const officerViewCasesRoutes = require("./routes/policeOfficerRoutes/viewCasesRoutes");

app.use("/api/officer", authMiddleware, roleMiddleware("officer"));

app.use("/api/officer/cases", caseRegistrationRoutes);
app.use("/api/officer/cases/update", caseUpdateRoutes);
app.use("/api/officer/statements", createStatementRoutes);
app.use("/api/officer/notifications", notificationRoutes);
app.use("/api/officer/dashboard", policeOfficerDashboardRoutes);
app.use("/api/officer/cases/view", officerViewCasesRoutes);

// ================= ADMIN =================
const assignDutiesRoutes = require("./routes/policeStationAdminRoutes/assignDutiesRoutes");
const createOfficersRoutes = require("./routes/policeStationAdminRoutes/createOfficersRoutes");
const adminViewCasesRoutes = require("./routes/policeStationAdminRoutes/viewCasesRoutes");
const manageOfficersRoutes = require("./routes/policeStationAdminRoutes/manageOfficersRoutes");
const trackCasesRoutes = require("./routes/policeStationAdminRoutes/trackCasesRoutes");
const policeStationDashboardRoutes = require("./routes/policeStationAdminRoutes/policeStationDashboardRoutes");

app.use("/api/admin", authMiddleware, roleMiddleware("stationAdmin"));

app.use("/api/admin/duties", assignDutiesRoutes);
app.use("/api/admin/officers", createOfficersRoutes);
app.use("/api/admin/cases", adminViewCasesRoutes);
app.use("/api/admin/officers/manage", manageOfficersRoutes);
app.use("/api/admin/cases/track", trackCasesRoutes);
app.use("/api/admin/dashboard", policeStationDashboardRoutes);

// Test route
app.get("/", (req, res) => res.send("Police Window System API Running"));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
const errorMiddleware = require("./middleware/commonMiddleware/errorMiddleware");
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));