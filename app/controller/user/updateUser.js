import { User } from "../../model/user.js"; // Correct import with uppercase

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { updatedata } = req.body;

  if (id) {
    try {
      const updatedUser = await User.findOneAndUpdate({ _id: id }, updatedata, {
        new: true,
        runValidators: true, // Run schema validators
      });

      if (updatedUser) {
        res.status(200).json(updatedUser); // Return updated user
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "User update failed", error: error.message }); // Include error details
    }
  } else {
    res.status(400).json({ message: "User ID is required" }); // Return 400 if no ID is provided
  }
};
