import db from "../db/database.js";

const getAllUsers = async () => {
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

const storeUser = async (name, email, password, address) => {
  try {
    const date_now = new Date();
    const data = await db.query(
      `INSERT INTO users (name, email, password, address, created_date, modified_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [name, email, password, address, date_now, date_now]
    );
    const res = data?.rows[0];
    delete res.password;
    return { status: "success", res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export { getAllUsers, storeUser };
