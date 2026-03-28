const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// ================= ROUTES =================

// AUTH
const loginRoutes = require("./routes/authRoutes/loginRoutes");
const logoutRoutes = require("./routes/authRoutes/logoutRoutes");

app.use("/api/auth", loginRoutes);
app.use("/api/auth", logoutRoutes);

// HEADQUARTERS
const createPoliceStationRoutes = require("./routes/headquartersRoutes/policeStationRoutes");
const stationAdminRoutes = require("./routes/headquartersRoutes/stationAdminRoutes");
const headquartersDashboardRoutes = require("./routes/headquartersRoutes/headQuarterDashboardRoutes");
const headquartersAccountRoutes = require("./routes/headQuartersRoutes/headquartersAccountRoutes");

app.use("/api/hq/stations", createPoliceStationRoutes);
app.use("/api/hq/admins", stationAdminRoutes);
app.use("/api/hq/dashboard", headquartersDashboardRoutes);
app.use("/api/hq/accounts", headquartersAccountRoutes);

// OFFICERS (ADMIN SIDE)
const officerRoutes = require("./routes/policeStationAdminRoutes/OfficerRoutes");
app.use("/api/admin/officers", officerRoutes);

// OTHER ADMIN ROUTES
const assignDutiesRoutes = require("./routes/policeStationAdminRoutes/assignDutiesRoutes");
const adminViewCasesRoutes = require("./routes/policeStationAdminRoutes/viewCasesRoutes");
const trackCasesRoutes = require("./routes/policeStationAdminRoutes/trackCasesRoutes");
const policeStationDashboardRoutes = require("./routes/policeStationAdminRoutes/policeStationDashboardRoutes");

app.use("/api/admin/duties", assignDutiesRoutes);
app.use("/api/admin/cases", adminViewCasesRoutes);
app.use("/api/admin/cases/track", trackCasesRoutes);
app.use("/api/admin/dashboard", policeStationDashboardRoutes);

// ================= OFFICER SIDE =================

// CASES (ALL case routes use SAME base path)
const caseRegistrationRoutes = require("./routes/policeOfficerRoutes/caseRegistrationRoutes");
const caseUpdateRoutes = require("./routes/policeOfficerRoutes/caseUpdateRoutes");
const officerViewCasesRoutes = require("./routes/policeOfficerRoutes/viewCasesRoutes");
// CASES (OFFICER SIDE)
app.use("/api/officer/cases/register", caseRegistrationRoutes);
app.use("/api/officer/cases/update", caseUpdateRoutes);
app.use("/api/officer/cases/view", officerViewCasesRoutes);

// OTHER OFFICER FEATURES
const createStatementRoutes = require("./routes/policeOfficerRoutes/createStatementRoutes");
const notificationRoutes = require("./routes/policeOfficerRoutes/notificationRoutes");
const policeOfficerDashboardRoutes = require("./routes/policeOfficerRoutes/policeOfficerDashboardRoutes");

app.use("/api/officer/statements", createStatementRoutes);
app.use("/api/officer/notifications", notificationRoutes);
app.use("/api/officer/dashboard", policeOfficerDashboardRoutes);

// ROOT
app.get("/", (req, res) => {
  res.send("Police Window System API Running");
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ERROR HANDLER
const errorMiddleware = require("./middleware/commonMiddleware/errorMiddleware");
app.use(errorMiddleware);

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));