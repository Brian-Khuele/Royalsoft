import { Router } from "express";
import hydraX from "./hydraX";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/", hydraX);

// Export the base-router
export default router;
