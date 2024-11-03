import express from "express";
import { signIn, signOut, signup, verifyEmail } from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Auth Service!!!");
});

router.post("/sign-up", signup);
router.post("/sign-in", signIn);
router.post("/sign-out", signOut);

router.post("/verify-email", verifyEmail);

export default router;
