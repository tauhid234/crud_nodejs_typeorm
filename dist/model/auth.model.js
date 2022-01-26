"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entity/user.entity");
class AuthModel {
    Sign(first_name, password, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const auth = yield (0, typeorm_1.getRepository)(user_entity_1.UserEntity).find({ first_name: first_name, password: password });
            console.log(auth);
            if (auth.length == 0) {
                return res.status(404).send({ message: "User atau password anda salah" });
            }
            return res.status(200).send({ data: auth, token: "!@#24" });
        });
    }
}
exports.AuthModel = AuthModel;
