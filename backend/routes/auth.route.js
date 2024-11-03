import express from "express";
import {
  signIn,
  signOut,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Auth Service!!!");
});

router.post("/sign-up", signup);
router.post("/sign-in", signIn);
router.post("/sign-out", signOut);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.get("/check-auth", verifyToken, checkAuth);

export default router;
