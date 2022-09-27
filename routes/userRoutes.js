import {
  showAllUsers,
  register,
  deleteById,
} from "../controllers/userController.js";

import { Router } from "express";
const router = Router();

router.get("/", showAllUsers);
router.post("/", register);
router.delete("/:id", deleteById);

export default router;
