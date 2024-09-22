import { tokenDecoder, extractToken } from "../helper/jwt.js";

export const auth = (req, res, next) => {
  try {
    // Extract token from the request
    const tokenFromReq = extractToken(req);

    // Check if token is present
    if (!tokenFromReq) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    // Decode the token
    const decoded = tokenDecoder(tokenFromReq);

    // Attach decoded token data (usually user info) to the request object
    req.user = decoded;

    // Proceed to the next middleware/route handler
    next();
  } catch (error) {
    // Handle token errors (e.g., invalid or expired token)
    return res
      .status(403)
      .json({ message: "Invalid token. Access denied.", error: error.message });
  }
};
