import { Router } from "express";
import {
  fetchRoomsBySearchParams,
  create,
  fetchRoomById,
  updateRoom,
  deleteRoom,
} from "../controllers/room.controller";

const router = Router();

router.get("/", fetchRoomsBySearchParams);
router.post("/", create);
router.get("/:id", fetchRoomById);
router.patch("/:id", updateRoom);
router.delete("/:id", deleteRoom);

export default router;
