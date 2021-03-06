const express = require("express");
const router = express.Router();
const path = require("path");
const isLogin = require("./middlewares/isLogin");

const authController = require("./controllers/Auth");
const mainController = require("./controllers/Main");

router.get("/", authController.showLogin);
router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/registro", authController.showRegister);
router.post("/registro", authController.store);
router.get("/home", isLogin, mainController.showHome);
router.get("/publicar", isLogin, mainController.showCreatePublication);

module.exports = router;