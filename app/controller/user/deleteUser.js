import { User } from "../../Model/user.js";

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log("Id from delete", id);
  try {
    if (id) {
      const result = await User.deleteOne({ id });
      if (result.deletedCount > 0) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error while deleting user" });
  }
};
