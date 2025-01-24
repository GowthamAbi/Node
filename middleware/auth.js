const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/config");

const auth = {
  verifyLogin: (request, response, next) => {
    const token = request.header("Authorization").substring(7);
    if (!token) {
      response.json({ message: "Login Failed" });
    }
    try {
      const verifyed = jwt.verify(token, SECRET_KEY);
      request.user_id = verifyed._id;
      
    } catch (error) {
      response.json({ message: "Error in verifyed", error });
    }

    next();
  },
};
module.exports = auth;
