import { Router } from "express";
import adminRoutes from "./adminRoutes.js";
import customerRoutes from "./customerRoutes.js";

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
router.use("/customer", customerRoutes);

export default router;
