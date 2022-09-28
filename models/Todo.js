import db from "../db/database.js";
import { getUserById } from "./User.js";

export const getAllTodos = async () => {
  try {
    const data = await db.query(`SELECT * FROM todos`);
    const resCount = data?.rowCount;
    const res = data?.rows;
    return { status: "success", count: resCount, res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const storeList = async (owner_id, list) => {
  try {
    if (list == null) return { status: "error", message: "list are required" };

    const date_now = new Date();
    const data = await db.query(
      `INSERT INTO todos (owner_id, list, created_date, modified_date) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [owner_id, list, date_now, date_now]
    );
    const res = data?.rows[0];
    const user = await getUserById(res.owner_id);
    return { status: "success", res, user };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
