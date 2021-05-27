import { Router } from 'express';
import learner from './learnerRoute';
import parent from './parentRoute';
import staff from './staffRoute';
import system from './systemRoute';
import onlineApplication from './onlineApplicationsRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/learner', learner);
router.use('/parent', parent);
router.use('/staff', staff);
router.use('/system', system);
router.use('/onlineApplications', onlineApplication);

// Export the base-router
export default router;
