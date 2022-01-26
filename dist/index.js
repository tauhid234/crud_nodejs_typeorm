"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const typeorm_1 = require("typeorm");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const app = (0, express_1.default)();
(0, typeorm_1.createConnection)();
//MIDLEWARE
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// LOGIN ROUTE
app.use(auth_routes_1.default);
// ROUTES
app.use(user_routes_1.default);
app.listen(3000);
console.log("SERVER LISTEN PORT ", 3000);
