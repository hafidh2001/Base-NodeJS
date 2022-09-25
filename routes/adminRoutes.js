import { showAllAdmins, register } from "../controllers/adminController.js";
import { Router } from "express";

const router = Router();

router.get("/", showAllAdmins);

router.post("/", register);

router.put("/:id", (req, res) => {
  console.log("Halaman update by id admin");
});

router.delete("/:id", (req, res) => {
  console.log("Halaman delete by id admin");
});

export default router;
