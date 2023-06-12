import { Router } from "express";
import { addOME, countOEM, getOMEs } from "../controllers/OEMController";
export const OEMRouter = Router();
OEMRouter.get("/",getOMEs);
OEMRouter.post("/",addOME);
OEMRouter.get("/count",countOEM);