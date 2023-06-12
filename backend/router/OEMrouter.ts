import { Router } from "express";
import { addOME, countOEM, getOMEs } from "../controllers/OEMController";
import { auth } from "../middleware/authMiddleware";
export const OEMRouter = Router();
OEMRouter.get("/",getOMEs);
OEMRouter.post("/",auth,addOME);
OEMRouter.get("/count",countOEM);