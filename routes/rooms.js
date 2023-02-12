const { Router } = require("express");
const roomsController = require("../controllers/RoomsController");

const router = Router();

router.get("/rooms", roomsController.fetchRoomsBySearchParams);

router.post("/rooms", roomsController.create);

router.get("/rooms/:id", roomsController.fetchRoomById);

router.patch("/rooms/:id", roomsController.updateRoom);

router.delete("/rooms/:id", roomsController.deleteRoom);

module.exports = router;
