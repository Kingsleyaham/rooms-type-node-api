import { Router } from "express";
import { login, logout, signup } from "../controllers/auth.controller";

const router = Router();

router.post("/login", login);
router.post("/register", signup);
router.get("/logout", logout);

export default router;
