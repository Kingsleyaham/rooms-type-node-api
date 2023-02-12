const { Router } = require("express");
const roomTypesController = require("../controllers/RoomTypesController");

const router = Router();

router.get("/rooms-types", roomTypesController.fetchAll);

router.post("/rooms-types", roomTypesController.create);

module.exports = router;
