"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const learnerRoute_1 = (0, tslib_1.__importDefault)(require("routes/learnerRoute"));
const parentRoute_1 = (0, tslib_1.__importDefault)(require("routes/parentRoute"));
const staffRoute_1 = (0, tslib_1.__importDefault)(require("routes/staffRoute"));
const systemRoute_1 = (0, tslib_1.__importDefault)(require("routes/systemRoute"));
const onlineApplicationsRoute_1 = (0, tslib_1.__importDefault)(require("routes/onlineApplicationsRoute"));
const router = (0, express_1.Router)();
router.use('/learner', learnerRoute_1.default);
router.use('/parent', parentRoute_1.default);
router.use('/staff', staffRoute_1.default);
router.use('/system', systemRoute_1.default);
router.use('/onlineApplications', onlineApplicationsRoute_1.default);
exports.default = router;
