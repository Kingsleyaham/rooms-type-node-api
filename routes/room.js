const { Router } = require("express");
const roomController = require("../controllers/room.controller");
const { requireAuth } = require("../middlewares/auth.middleware");

const router = Router();

router.get("/", roomController.fetchRoomsBySearchParams);

router.post("/", roomController.create);

router.get("/:id", roomController.fetchRoomById);

router.patch("/:id", roomController.updateRoom);

router.delete("/:id", roomController.deleteRoom);

module.exports = router;
