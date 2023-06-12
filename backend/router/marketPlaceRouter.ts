import { Router } from "express";
import { addCar, deleteCar, getCars, updateCar } from "../controllers/marketPlaceController";
import imageMiddleware from "../middleware/imageMiddleware";
import { auth } from "../middleware/authMiddleware";


export const marketplaceRouter = Router();

marketplaceRouter.post("/",auth,imageMiddleware,addCar);
marketplaceRouter.get("/",getCars);
marketplaceRouter.delete("/",auth,deleteCar);
marketplaceRouter.put("/",auth,imageMiddleware,updateCar);