import jwt from "jsonwebtoken";
import { jwt_secret } from "../config.js";
import db from "../db/database.js";

export const checkCredential = async (req, res, next) => {
  // get authorization token
  const { authorization } = req.headers;
  try {
    // check if token exists
    if (!authorization) {
      res.json({
        status: "error",
        message: "failed to access, credentials not found",
      });
      return;
    }
    // split token
    const token = authorization.split("Bearer ");
    // verify token using jwt
    const decode = jwt.verify(token[1], jwt_secret);
    delete decode.iat;
    delete decode.exp;
    // check decode token with user data
    const user = await db.query(
      `SELECT user_id, name, email FROM users WHERE email = $1`,
      [decode.email]
    );
    // check if user is exist
    if (user?.rowCount === 0) {
      res.json({ status: "error", message: "authorization failed" });
      return;
    }
    req.user = {
      user_id: user.rows[0].user_id,
      name: user.rows[0].name,
      email: user.rows[0].email,
    };
    next();
  } catch (error) {
    next(error);
  }
};
