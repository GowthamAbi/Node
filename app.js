const express = require("express");
const logger = require("./utils/logger");
const errorRouter = require("./utils/errorRouter");
const jobRouter = require("./routers/jobRouter");
const authRoutes = require("./routers/authRoutes");

const app = express();
app.use(express.json());
app.use(logger);

app.use("/", jobRouter);
app.use("/auth", authRoutes);

app.use(errorRouter);

module.exports = app;
