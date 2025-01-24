const jwt = require("jsonwebtoken");
const User = require("../module/User");
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
  allowRoles: (roles) => {
    return async (request, response, next) => {
      const userid = request.userid;
      const user = await User.findById(userid);
      if (!roles.includes(user.role)) {
        response.json({ Message: "Not Allowed" });
      }
      next();
    };
    
  },
};
module.exports = auth;
