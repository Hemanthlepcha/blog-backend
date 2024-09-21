import { User } from "../../Model/user.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //TODO:check whether is registered or not
    //hash the passwor
    const saltRound = 10000;
    const hPassword = await bcrypt.hash(password, saltRound);
    const newUser = new User({
      name: name,
      email: email,
      password: hPassword,
    });
    const savedUser = await newUser.save();
    console.log("New User data", savedUser);
    res.status(200).json({
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
