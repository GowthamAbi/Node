const express = require("express");
const authController = require("../controller/authController");
const auth = require("../middleware/auth");
const authRouter = express.Router();
authRouter.post("/register", authController.register);
authRouter.get("/my", auth.verifyLogin, authController.my);

authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);

module.exports = authRouter;
