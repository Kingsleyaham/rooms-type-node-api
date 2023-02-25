import { Router } from "express";
import {
  fetchAll,
  create,
  updateRoomType,
  deleteRoomType,
} from "../controllers/roomType.controller";

const router = Router();

router.get("/", fetchAll);
router.post("/", create);
router.patch("/:id", updateRoomType);
router.delete("/:id", deleteRoomType);

export default router;
