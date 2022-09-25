import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Halaman awal customer");
  console.log("Halaman awal customer");
});

router.post("/", (req, res) => {
  console.log("Halaman post customer");
});

router.put("/:id", (req, res) => {
  console.log("Halaman update by id customer");
});

router.delete("/:id", (req, res) => {
  console.log("Halaman delete by id customer");
});

export default router;
