const { Router } = require("express");
const roomTypeController = require("../controllers/roomType.controller");

const router = Router();

router.get("/", roomTypeController.fetchAll);
router.post("/", roomTypeController.create);
router.patch("/:id", roomTypeController.updateRoomType);
router.delete("/:id", roomTypeController.deleteRoomType);

module.exports = router;
