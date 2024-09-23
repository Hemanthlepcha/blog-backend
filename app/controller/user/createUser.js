import { User } from "../../Model/user.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email.",
      });
    }

    // Hash the password
    const saltRound = 10;
    const hPassword = await bcrypt.hash(password, saltRound);

    const newUser = new User({
      name,
      email,
      password: hPassword,
    });

    const savedUser = await newUser.save();
    console.log("New User data", savedUser);

    res.status(201).json({
      success: true,
      data: savedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error while creating user",
    });
  }
};
