"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const systemController_1 = require("src/controllers/systemController");
const multer_1 = (0, tslib_1.__importDefault)(require("multer"));
const uuid_1 = require("uuid");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        const { originalname } = file;
        callback(null, (0, uuid_1.v4)() + originalname);
    },
});
const upload = (0, multer_1.default)({ storage });
const router = (0, express_1.Router)();
router.get('/races', systemController_1.getRaces);
router.get('/roles', systemController_1.getRoles);
router.get('/countries', systemController_1.getCountries);
router.get('/grades', systemController_1.getGrades);
router.get('/subjects', systemController_1.getSubjects);
router.get('/combinations', systemController_1.getCombinations);
router.get('/genders', systemController_1.getGenders);
router.get('/idtypes', systemController_1.getIdtypes);
router.get('/languages', systemController_1.getLanguages);
router.get('/relations', systemController_1.getRelations);
router.get('/learnerStatus', systemController_1.getLearnerStatus);
router.get('/subjectsInGrade', systemController_1.getGradeSubjects);
exports.default = router;
