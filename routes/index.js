import { Router } from "express";
import adminRoutes from "./adminRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router();

// make route
router.get("/", (req, res) => {
  res.send("Hactive8 - Final Project 1");
});

router.get("/test", (req, res) => {
  res.send("Halaman Test");
  console.log("Halaman Test");
});

// create same-endpoint
router.use("/admin", adminRoutes);
router.use("/user", userRoutes);

export default router;
