const express = require("express");
const jobController = require("../controller/jobController");
const auth = require("../middleware/auth");

const jobRouter = express();

jobRouter.get(
  "/",
  auth.verifyLogin,
  auth.allowRoles("Admin"),
  jobController.getJobs
);
jobRouter.post("/", jobController.createJobs);
jobRouter.get("/search", jobController.search);
jobRouter.get("/:id", jobController.getJobById);
jobRouter.put("/:id", jobController.updateById);

module.exports = jobRouter;
