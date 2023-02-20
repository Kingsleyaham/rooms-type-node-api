const { Router } = require("express");
const roomRoute = require("./room");
const roomTypeRoute = require("./roomType");
const userRoute = require("./user");
const authRoute = require("./auth");
const { requireAuth } = require("../middlewares/auth.middleware");
const { requireAuthorization } = require("../middlewares/roleAuth.middleware");
const {
  validateUser,
  validateRoom,
  validateRoomType,
} = require("../middlewares/validation/validate.middleware");

const router = Router();

router.use("/rooms", validateRoom, requireAuth, roomRoute);
router.use(
  "/rooms-types",
  requireAuth,
  requireAuthorization,
  validateRoomType,
  roomTypeRoute
);
router.use("/user", userRoute);
router.use("/auth", validateUser, authRoute);

module.exports = router;
