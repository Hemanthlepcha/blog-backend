import { User } from "../../Model/user.js";

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log("Id from delete", id);
  try {
    if (id) {
      // Query by the custom `id` field which stores the UUID
      const result = await User.deleteOne({ id });
      if (result.deletedCount > 0) {
        res.status(200).json({ message: "User deleted successfully" }); // Return JSON with a status of 200
      } else {
        res.status(404).json({ message: "User not found" }); // Return JSON for not found
      }
    } else {
      res.status(404).json({ message: "User not found" }); // No id provided
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error while deleting user" }); // Return JSON for errors
  }
};
