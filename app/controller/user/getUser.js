import { User } from "../../Model/user.js";

export const getUser = async (req, res) => {
  const { id } = req.params; // Fixing destructuring
  console.log("Id", id);
  try {
    if (id) {
      const user = await User.findOne({ id });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } else {
      throw new Error("No user id provided"); // Correct error throwing
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error while fetching user" }); // Correct error handling
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error fetching users" }); // Correct error handling
  }
};
