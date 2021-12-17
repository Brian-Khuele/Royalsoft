import { Router } from 'express';
import {
  getCombinations,
  getCountries,
  getGenders,
  getGrades,
  getIdtypes,
  getLanguages,
  getLearnerStatus,
  getRaces,
  getRelations,
  getRoles,
  getSubjects,
  getGradeSubjects,
} from 'src/controllers/systemController';

import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    const { originalname } = file;
    callback(null, uuidv4() + originalname);
  },
});
const upload = multer({ storage });

const router = Router();

router.get('/races', getRaces);
router.get('/roles', getRoles);
router.get('/countries', getCountries);
router.get('/grades', getGrades);
router.get('/subjects', getSubjects);
router.get('/combinations', getCombinations);
router.get('/genders', getGenders);
router.get('/idtypes', getIdtypes);
router.get('/languages', getLanguages);
router.get('/relations', getRelations);
router.get('/learnerStatus', getLearnerStatus);
router.get('/subjectsInGrade', getGradeSubjects);

export default router;
