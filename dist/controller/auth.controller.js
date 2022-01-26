"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_model_1 = require("../model/auth.model");
class AuthController {
    getAuth(req, res, next) {
        const header = req.headers.authorization;
        console.log("TEST");
        if (header == undefined || header == "" || header == null) {
            return res.status(401).send({ message: "AUTHENTICATION IS REQUIRED" });
        }
        const text_bearer = header.split(" ");
        const split = text_bearer[0];
        if (split != "Bearer") {
            return res.status(401).send({ message: "Bearer must be implementation in Authentication" });
        }
        next();
    }
    Sign(req, res) {
        const model = new auth_model_1.AuthModel;
        const first_name = req.body.first_name;
        const password = req.body.password;
        return model.Sign(first_name, password, res);
    }
}
exports.AuthController = AuthController;
