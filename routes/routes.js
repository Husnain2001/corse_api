
const departmentRoutes = require("../modules/Department/department.routes");

const authRoutes = require("../modules/Auth/auth.routes");

module.exports = function router(app) {
  app
    .use("/api/v1/department", departmentRoutes)

    .use("/api/v1/auth", authRoutes)

};
