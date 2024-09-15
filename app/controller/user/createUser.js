import { User } from "../../Model/user.js";
export const createUser = async (req, res) => {
  try {
    // Create a new user instance
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, // Hashing should be done here if needed
    });
    // Save the user to the database
    const savedUser = await newUser.save(); // Use await here to ensure it's saved before sending a response
    console.log("New User data", savedUser);
    // Send a successful response with status code 200 and JSON content
    res.status(200).json({
      success: true,
      data: savedUser,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Error while creating user",
    });
  }
};
