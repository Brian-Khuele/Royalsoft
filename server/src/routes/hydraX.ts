import { Router } from "express";
import {
	getLearners,
	updateLearner,
	getRaces,
	getRoles,
	getCountries,
	getGrades,
	getSubjects,
	getCombinations,
	getGenders,
	getIdtypes,
	getLanguages,
	getRelations,
	getLearnerStatus,
	setLearnerStatus,
	setLearnerSubjects,
} from "src/controllers/hydraController";

const router = Router();

router.get("/learners", getLearners);
router.post("/learners/:id", updateLearner);

router.get("/races", getRaces);
router.get("/roles", getRoles);
router.get("/countries", getCountries);
router.get("/grades", getGrades);
router.get("/subjects", getSubjects);
router.get("/combinations", getCombinations);
router.get("/genders", getGenders);
router.get("/idtypes", getIdtypes);
router.get("/languages", getLanguages);
router.get("/relations", getRelations);
router.get("/learnerStatus", getLearnerStatus);
router.post("/learnerStatus", setLearnerStatus);
router.post("/learnerSubjects", setLearnerSubjects);

export default router;
