import db from "../db/database.js";

const getAllAdmins = async () => {
  try {
    const data = await db.query("SELECT * FROM admins");
    const resCount = data?.rowCount;
    const res = data?.rows;
    return { status: "success", count: resCount, res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

const storeAdmins = async (email, password) => {
  try {
    const date_now = new Date();
    const data = await db.query(
      "INSERT INTO admins (email, password, created_date, modified_date) VALUES ($1, $2, $3, $4) RETURNING *;",
      [email, password, date_now, date_now]
    );
    const res = data?.rows[0];
    delete res.password;
    return { status: "success", res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export { getAllAdmins, storeAdmins };
