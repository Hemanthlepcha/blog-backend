import { tokenDecoder, extractToken } from "../helper/jwt.js";

export const auth = (req, res, next) => {
  try {
    const tokenFromReq = extractToken(req);

    if (!tokenFromReq) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const decodedToken = tokenDecoder(tokenFromReq);

    req.user = decodedToken;

    next();
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Invalid token. Access denied.", error: error.message });
  }
};
