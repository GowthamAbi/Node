const user = require("../module/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/config");
const authController = {
  register: async (request, response) => {
    try {
      const { name, email, password } = request.body;

      const User = await user.findOne({ email });

      if (User) {
        response.json({ message: "This User Already Register" });
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const users = new user({ name, email, password: passwordHash });

      await users.save();

      response.json({ message: "Sucessfully Register" });
    } catch (err) {
      response.json({ message: "Error in register", err });
    }
  },
  login: async (request, response) => {
    try {
      const { email, password } = request.body;

      const User = await user.findOne({ email });

      if (!User) {
        return response.json({ message: "You are not Register" });
      }
      const isMatch = await bcrypt.compare(password, User.password);
      if (!isMatch) {
        response.json({ message: "You are not Enter Wrong password" });
      }
      const token = await jwt.sign({ id: User._id }, SECRET_KEY, {
        expiresIn: "1h",
      });
      response.json({ token, message: "Sucessfully login" });
    } catch (error) {
      response.json({ message: "Error in login", error });
    }
  },
  logout: async (request, response) => {
    try {
      response.json({ message: "Sucessfully logout" });
    } catch (err) {
      response.json({ message: "Error in logout", err });
    }
  },
  my: async (request, response) => {
    try {
      const user_id = request.user_id;
      console.log(user_id);
      response.json({ message: "Your in Dashboard" });
    } catch (err) {
      response.json({ message: "Error in me", err });
    }
  },
};
module.exports = authController;
