import db from "../db/database.js";
import createTable from "./createTable.js";

createTable.map(async (data, index) => {
  await db.query(data).then((res) => {
    console.log(res);
    index === createTable.length - 1 && db.end();
  });
});
