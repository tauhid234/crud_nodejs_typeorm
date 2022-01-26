"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const auth = new auth_controller_1.AuthController;
const router = (0, express_1.Router)();
router.post("/login", auth.Sign);
exports.default = router;
