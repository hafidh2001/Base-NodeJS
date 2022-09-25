import {
  showAllAdmins,
  register,
  showById,
  editById,
  deleteById,
} from "../controllers/adminController.js";

import { Router } from "express";
const router = Router();

router.get("/", showAllAdmins);
router.post("/", register);
router.get("/:id", showById);
router.put("/:id", editById);
router.delete("/:id", deleteById);

export default router;
