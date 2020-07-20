import { Router } from "express";
import { getLearners } from "src/controllers/hydraController";

const router = Router();

router.get("/learners", getLearners);

export default router;
