const express = require("express");
const jobController = require("../controller/jobController");

const jobRouter = express();

jobRouter.get("/", jobController.getJobs);
jobRouter.post("/", jobController.createJobs);
jobRouter.get("/search", jobController.search);
jobRouter.get("/:id", jobController.getJobById);

module.exports = jobRouter;
