const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const validateUser = require("../middlewares/validate.middleware");

const router = Router();

router.post("/login", validateUser, authController.login);
router.post("/register", validateUser, authController.signup);
router.get("/logout", authController.logout);

module.exports = router;
