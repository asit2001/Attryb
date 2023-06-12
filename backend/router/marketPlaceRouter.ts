import { Router } from "express";
import { addCar, deleteCar, getCars, updateCar } from "../controllers/marketPlaceController";
import imageMiddleware from "../middleware/imageMiddleware";


export const marketplaceRouter = Router();

marketplaceRouter.post("/",imageMiddleware,addCar);
marketplaceRouter.get("/",getCars);
marketplaceRouter.delete("/",deleteCar);
marketplaceRouter.put("/",imageMiddleware,updateCar);