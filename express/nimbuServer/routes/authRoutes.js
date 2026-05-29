const { Router } = require("express");
const path = require("path");
const { register, login } = require("../controllers/authController");
const { validateRegister, validateLogin } = require("../middlewares/validation");

const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

module.exports = router;
