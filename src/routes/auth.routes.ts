import { Router } from "express";
import { AuthController } from "../controller/auth.controller";

const auth = new AuthController;
const router = Router();

router.post("/login", auth.Sign);

export default router;