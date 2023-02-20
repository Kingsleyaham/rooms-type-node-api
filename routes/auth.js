const { Router } = require("express");
const authController = require("../controllers/auth.controller");

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.signup);
router.get("/logout", authController.logout);

module.exports = router;
