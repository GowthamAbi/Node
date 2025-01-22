const express = require("express");
const app = require("./app");
const mongoose = require("mongoose");
const { MongoDB_URL, PORT } = require("./utils/config");
require("dotenv").config();

mongoose
  .connect(MongoDB_URL)
  .then(() => {
    console.log("Connted to DataBase");
    app.listen(PORT, () => {
      console.log("listeing 127.0.0.1.4890");
    });
  })
  .catch((err) => {
    console.log("db not connect", err);
  });
