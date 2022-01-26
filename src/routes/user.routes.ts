import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { AuthController } from "../controller/auth.controller";

const user = new UserController;
const auth = new AuthController;

const router = Router();

router.get("/user", auth.getAuth, user.getUser);
router.post("/user/add", user.createUser);
// router.post("/user/:id", );
// router.post("/user/delete/:id", );

export default router