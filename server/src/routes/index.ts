import { Router } from "express";
import vdoRouter from "./hydraX";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/", vdoRouter);

// Export the base-router
export default router;
