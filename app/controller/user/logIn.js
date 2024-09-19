import { User } from "../../Model/user";

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne(email)
    if(user){
      const checkPassword = await
    }
  } catch (error) {
    throw new Error(error);
  }
};
