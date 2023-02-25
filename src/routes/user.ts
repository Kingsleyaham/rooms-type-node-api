import { Router } from "express";
import { fetchAll, fetchUserById } from "../controllers/user.controller";

const router = Router();

router.get("/", fetchAll);
router.get("/:id", fetchUserById);

export default router;
