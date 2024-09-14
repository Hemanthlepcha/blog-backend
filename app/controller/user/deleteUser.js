import { User } from "../../Model/user.js";

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      await User.deleteOne(id);
      res.send("User deleted Successfully");
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "error while deleting user" });
  }
};
