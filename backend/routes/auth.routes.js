import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();
router.get("/check-auth",verifyToken,checkAuth)

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-pasword", forgotPassword);
router.post("/reset-pasword/:token", resetPassword);

export default router;
