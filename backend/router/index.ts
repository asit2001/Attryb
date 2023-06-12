import { Router } from "express";
import { OEMRouter } from "./OEMrouter";
import { marketplaceRouter } from "./marketPlaceRouter";
import { authRouter } from "./authRouter";

const router = Router();
router.use("/oem",OEMRouter);
router.use("/cars",marketplaceRouter);
router.use("/user",authRouter);
export default router;