import { database } from "../config.js";
import pkg from "pg";

const { Pool } = pkg;
const db = new Pool({
  user: database.user,
  host: database.host,
  database: database.name,
  password: database.password,
  port: database.port,
});

export default db;
