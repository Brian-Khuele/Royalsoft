import { Router } from 'express';
import learner from 'routes/learnerRoute';
import parent from 'routes/parentRoute';
import staff from 'routes/staffRoute';
import system from 'routes/systemRoute';
import onlineApplication from 'routes/onlineApplicationsRoute';

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
