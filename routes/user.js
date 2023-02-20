const { Router } = require("express");
const userController = require("../controllers/user.controller");

const router = Router();

router.get("/", userController.fetchAll);
router.get("/:id", userController.fetchUserById);

module.exports = router;
