import { Router } from 'express';
import {
  getLearners,
  updateLearner,
  setLearnerStatus,
  setLearnerSubjects,
  registerLearner,
} from 'src/controllers/learnerController';

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

router.get('/', getLearners);
router.post('/:id', updateLearner);
router.post('/status', setLearnerStatus);
router.post('/subjects', setLearnerSubjects);
router.post('/register', upload.array('files'), registerLearner);

export default router;
