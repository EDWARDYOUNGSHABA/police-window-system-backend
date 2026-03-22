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

// ================= ROUTES =================

// ===== HEADQUARTERS =====
const createPoliceStationRoutes = require("./routes/headQuartersRoutes/policeStationRoutes");
const stationAdminRoutes = require("./routes/headQuartersRoutes/stationAdminRoutes");
const headquartersDashboardRoutes = require("./routes/headquartersRoutes/headQuarterDashboardRoutes");
const headquartersAccountRoutes = require("./routes/headQuartersRoutes/headquartersAccountRoutes");

app.use("/api/hq/stations", createPoliceStationRoutes);
app.use("/api/hq/admins", stationAdminRoutes);           // Station Admin (create/update/delete)
app.use("/api/hq/dashboard", headquartersDashboardRoutes);
app.use("/api/hq/accounts", headquartersAccountRoutes);  // Headquarters Accounts (create/update/delete)

// ===== POLICE OFFICER =====
const caseRegistrationRoutes = require("./routes/policeOfficerRoutes/caseRegistrationRoutes");
const caseUpdateRoutes = require("./routes/policeOfficerRoutes/caseUpdateRoutes");
const createStatementRoutes = require("./routes/policeOfficerRoutes/createStatementRoutes");
const notificationRoutes = require("./routes/policeOfficerRoutes/notificationRoutes");
const policeOfficerDashboardRoutes = require("./routes/policeOfficerRoutes/policeOfficerDashboardRoutes");
const officerViewCasesRoutes = require("./routes/policeOfficerRoutes/viewCasesRoutes");

app.use("/api/officer/cases", caseRegistrationRoutes);
app.use("/api/officer/cases", caseUpdateRoutes);
app.use("/api/officer/statements", createStatementRoutes);
app.use("/api/officer/notifications", notificationRoutes);
app.use("/api/officer/dashboard", policeOfficerDashboardRoutes);
app.use("/api/officer/cases/view", officerViewCasesRoutes);

// ===== ADMIN =====
const assignDutiesRoutes = require("./routes/policeStationAdminRoutes/assignDutiesRoutes");
const createOfficersRoutes = require("./routes/policeStationAdminRoutes/createOfficersRoutes");
const adminViewCasesRoutes = require("./routes/policeStationAdminRoutes/viewCasesRoutes");
const manageOfficersRoutes = require("./routes/policeStationAdminRoutes/manageOfficersRoutes");
const trackCasesRoutes = require("./routes/policeStationAdminRoutes/trackCasesRoutes");
const policeStationDashboardRoutes = require("./routes/policeStationAdminRoutes/policeStationDashboardRoutes");

app.use("/api/admin/duties", assignDutiesRoutes);
app.use("/api/admin/officers", createOfficersRoutes);
app.use("/api/admin/cases", adminViewCasesRoutes);
app.use("/api/admin/officers/manage", manageOfficersRoutes);
app.use("/api/admin/cases/track", trackCasesRoutes);
app.use("/api/admin/dashboard", policeStationDashboardRoutes);

// Test route
app.get("/", (req, res) => res.send("Police Window System API Running"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));