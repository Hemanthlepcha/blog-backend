import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.SECRET_JWT;

export const extractToken = (req) => {
  // Check for the authorization header in the request headers, not in the body
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new Error("No auth header");
  }
  console.log("split", authHeader.split(" ")[1]);
  // Split and return the token part
  return authHeader.split(" ")[1]; // Return the token
};

export const tokenDecoder = (token) => {
  // Decode the token using verify instead of sign
  return jwt.verify(token, secret); // Use verify to decode
};
