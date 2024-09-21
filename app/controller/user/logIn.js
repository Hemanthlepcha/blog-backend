import { User } from "../../Model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const logIn = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body.email);
  try {
    const user = await User.findOne({ email });
    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        res.status(401).json({ message: "Invalid Credentials" });
      }
      const token = jwt.sign(
        { user: user.id, email: user.email },
        process.env.SECRET_JWT,
        {
          expiresIn: "1h",
        },
      );
      return res.status(200).json({
        message: "Login successful",
        token, // Include the token if using JWT-based authentication
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
