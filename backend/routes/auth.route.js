import express from "express";
import { login, logout, signup, verifyEmail } from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Auth Service!!!");
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);

export default router;
