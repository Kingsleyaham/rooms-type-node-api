import { Router } from "express";
import roomRoute from "./room";
import roomTypeRoute from "./roomType";
import userRoute from "./user";
import authRoute from "./auth";
import { requireAuth } from "../middlewares/auth.middleware";
import { requireAuthorization } from "../middlewares/roleAuth.middleware";
import {
  validateUser,
  validateRoom,
  validateRoomType,
} from "../middlewares/validation/validate.middleware";

const router = Router();

router.use("/rooms", validateRoom, requireAuth, roomRoute);
router.use(
  "/rooms-types",
  validateRoomType,
  requireAuth,
  requireAuthorization,
  roomTypeRoute
);
router.use("/users", requireAuth, requireAuthorization, userRoute);
router.use("/auth", validateUser, authRoute);

export default router;
