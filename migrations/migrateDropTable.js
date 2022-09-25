import db from "../db/database.js";
import dropTable from "./dropTable.js";

dropTable.map(async (data, index) => {
  await db.query(data).then((res) => {
    console.log(res);
    index === dropTable.length - 1 && db.end();
  });
});
