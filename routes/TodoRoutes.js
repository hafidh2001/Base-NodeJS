import { showAllTodos, addTodo } from "../controllers/TodoController.js";
import { checkCredential } from "../middlewares/checkCredential.js";
import { Router } from "express";
const router = Router();

router.get("/", showAllTodos);
router.post("/add", checkCredential, addTodo);

export default router;
