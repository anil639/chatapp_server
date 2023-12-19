const router = require("express").Router();
const { register } = require("../Controllers/UserController");

router.post("/register", register);

module.exports = router;
