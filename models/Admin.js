import db from "../db/database.js";

const getAllAdmins = async () => {
  try {
    const data = await db.query(`SELECT * FROM admins`);
    const resCount = data?.rowCount;
    const res = data?.rows;
    delete res.password;
    return { status: "success", count: resCount, res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

const storeAdmin = async (name, email, password, address) => {
  try {
    const date_now = new Date();
    const data = await db.query(
      `INSERT INTO admins (name, email, password, address, created_date, modified_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [name, email, password, address, date_now, date_now]
    );
    const res = data?.rows[0];
    delete res.password;
    return { status: "success", res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

const getById = async (admin_id) => {
  try {
    const data = await db.query(`SELECT * FROM admins WHERE admin_id = $1`, [
      admin_id,
    ]);
    if (data?.rowCount > 0) {
      const res = data?.rows;
      delete res.password;
      return { status: "success", res };
    } else {
      return { message: "data record with requested id does not exist" };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

const editAdminById = async (name, password, address, admin_id) => {
  try {
    const date_now = new Date();
    if (!!admin_id) {
      if (name == null && password == null && address == null) {
        return { status: "error", message: "you do not make any data changes" };
      }
      const sql = `UPDATE admins SET`;
      let set = "";
      if (!!name) {
        set += `name='${name}'`;
        if (!!password || !!address) {
          set += `,`;
        }
      }
      if (!!password) {
        set += `password='${password}'`;
        if (!!address) {
          set += `,`;
        }
      }
      if (!!address) {
        set += `address='${address}'`;
      }

      const data = await db.query(
        `${sql} ${set}, modified_date=$1 WHERE admin_id=$2 RETURNING *;`,
        [date_now, admin_id]
      );
      const res = data?.rows[0];
      delete res.password;
      return { status: "success", res };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

const deleteAdmin = async (admin_id) => {
  try {
    const data = await db.query(
      `DELETE FROM admins WHERE admin_id = $1 RETURNING *`,
      [admin_id]
    );
    const res = data?.rows[0];
    delete res.password;
    return { status: "success", res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export { getAllAdmins, storeAdmin, getById, editAdminById, deleteAdmin };
