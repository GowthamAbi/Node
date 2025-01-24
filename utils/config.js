require("dotenv").config();
const MongoDB_URL = process.env.MONOGODB_URL;
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECREATE_KEY;
module.exports = {
  MongoDB_URL,
  PORT,
  SECRET_KEY,
};
