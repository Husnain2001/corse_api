
const departmentRoutes = require("../modules/Department/department.routes");

module.exports = function router(app) {
  app
    .use("/api/v1/department", departmentRoutes)

};
