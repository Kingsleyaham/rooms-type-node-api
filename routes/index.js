const { Router } = require("express");
const roomRoute = require("./room");
const roomTypeRoute = require("./roomType");
const userRoute = require("./user");
const authRoute = require("./auth");
const { requireAuth } = require("../middlewares/auth.middleware");
const { requireAuthorization } = require("../middlewares/roleAuth.middleware");

const router = Router();

router.use("/rooms", requireAuth, roomRoute);
router.use("/rooms-types", requireAuth, requireAuthorization, roomTypeRoute);
router.use("/user", userRoute);
router.use("/auth", authRoute);

module.exports = router;
