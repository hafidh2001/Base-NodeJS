import { showAllUsers, register } from "../controllers/userController.js";

import { Router } from "express";
const router = Router();

router.get("/", showAllUsers);
router.post("/", register);

export default router;
