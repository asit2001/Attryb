import { Router } from "express";
import { logOut, login, signup } from "../controllers/userController";
export const authRouter = Router();
authRouter.post("/login",login);
authRouter.post("/signup",signup);
authRouter.delete("/logout",logOut)