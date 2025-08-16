import express from "express";
import {
  register,
  login,
  logout,
  verifyAccount,
  getAllAdmins,
  getMyProfile,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify", verifyAccount);
router.get("/logout", isAuthenticated, logout);
router.get("/myprofile", isAuthenticated, getMyProfile);
router.get("/admins", getAllAdmins);



export default router;
