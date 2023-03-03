
const departmentRoutes = require("../modules/Department/department.routes");

const authRoutes = require("../modules/Auth/auth.routes");

const teacherRoutes = require("../modules/Teacher/teacher.routes");

const courseRoutes = require("../modules/Courses/courses.routes");

const dashboardRoutes = require("../modules/Dashboard/dashboard.routes");

const coursefileRoutes = require("../modules/CourseFile/coursefile.routes");

module.exports = function router(app) {
  app
    .use("/api/v1/department", departmentRoutes)

    .use("/api/v1/auth", authRoutes)

    .use("/api/v1/teacher", teacherRoutes)

    .use("/api/v1/course", courseRoutes)

    .use("/api/v1/coursefile", coursefileRoutes)

    .use("/api/v1/dashboard", dashboardRoutes)

};
