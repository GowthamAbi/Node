const user = require("../module/User");
const authController = {
  register: async (request, response) => {
    try {
      const { name, email, password } = request.body;
      const User = await user.findOne({ email });
      if (User) {
        response.json({ message: "This User Already Register" });
      }
      const users = new user({ name, email, password });
      await users.save();
      response.json({ message: "Sucessfully Register" });
    } catch (err) {
      response.json({ message: "Error in register", err });
    }
  },
  login: async (request, response) => {
    try {
      response.json({ message: "Sucessfully login" });
    } catch (err) {
      response.json({ message: "Error in login", err });
    }
  },
  logout: async (request, response) => {
    try {
      response.json({ message: "Sucessfully logout" });
    } catch (err) {
      response.json({ message: "Error in logout", err });
    }
  },
  me: async (request, response) => {
    try {
      response.json({ message: "Your in Dashboard" });
    } catch (err) {
      response.json({ message: "Error in me", err });
    }
  },
};
module.exports = authController;
