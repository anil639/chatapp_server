const router = require("express").Router();
const { register, login, setAvatar } = require("../Controllers/UserController");

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);

module.exports = router;
