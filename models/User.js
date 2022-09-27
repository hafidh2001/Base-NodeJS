import db from "../db/database.js";
import { hash, compare } from "../helpers/bcrypt.js";

export const getAllUsers = async () => {
  try {
    const data = await db.query(`SELECT * FROM users`);
    const resCount = data?.rowCount;
    const res = data?.rows;
    delete res.password;
    return { status: "success", count: resCount, res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const storeUser = async (name, email, password, address) => {
  try {
    const encrypt_password = await hash(password);
    const date_now = new Date();
    const data = await db.query(
      `INSERT INTO users (name, email, password, address, created_date, modified_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [name, email, encrypt_password, address, date_now, date_now]
    );
    const res = data?.rows[0];
    delete res.password;
    return { status: "success", res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const deleteUser = async (user_id) => {
  try {
    const data = await db.query(
      `DELETE FROM users WHERE user_id = $1 RETURNING *`,
      [user_id]
    );
    const res = data?.rows[0];
    delete res.password;
    return { status: "success", res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
