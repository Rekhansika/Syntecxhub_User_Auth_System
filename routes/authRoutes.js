const express = require("express");
const { signup, login } = require("../controllers/authController");
const protect = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// 🔒 Protected route example
router.get("/dashboard", protect, (req, res) => {
  res.json({
    message: "Welcome to protected dashboard",
    user: req.user,
  });
});

module.exports = router;