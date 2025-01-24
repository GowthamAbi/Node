const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/config");

const auth = {
  verifyLogin: (request, response, next) => {
    const token = request.cookies.token;
    if (!token) {
      response.json({ message: "Login Failed" });
    }
    try {
      const verifyed = jwt.verify(token, SECRET_KEY);
      request.userid = verifyed.id;
    } catch (error) {
      response.json({ message: "Error in verifyed", error });
    }

    next();
  },
};
module.exports = auth;
