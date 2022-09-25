// import library
import { port } from "./config.js";
import express from "express";
import cors from "cors";
import { checkConnection } from "./helpers/connectionDatabase.js";
import routes from "./routes/index.js";

// Initializing variable express
const app = express();

// check connection to database
await checkConnection();

// calling the cors method for access API
app.use(cors());

// calling the express.json() method for parsing
app.use(express.json());

// calling routes
app.use(routes);

// declare route
app.listen(8000, () => {
  console.log(`Server running at port ${port}`);
});
