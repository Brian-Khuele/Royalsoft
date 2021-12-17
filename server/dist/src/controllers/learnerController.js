"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerLearner = exports.setLearnerSubjects = exports.updateLearner = exports.getLearners = void 0;
const tslib_1 = require("tslib");
const knex_1 = (0, tslib_1.__importDefault)(require("db/knex"));
const http_status_codes_1 = require("http-status-codes");
const getLearners = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let learners = yield (0, knex_1.default)('learner').select().orderBy('surname', 'asc');
        res.status(http_status_codes_1.StatusCodes.OK).json(learners);
    }
    catch (error) {
        return next(error);
    }
});
exports.getLearners = getLearners;
const updateLearner = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        if (!req.params.id) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: 'Student number missing' });
        }
        yield (0, knex_1.default)('learner').update(req.body).where({ student_number: req.params.id });
        return res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'successfully updated learner information' });
    }
    catch (error) {
        return next(error);
    }
});
exports.updateLearner = updateLearner;
const setLearnerSubjects = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        console.log('setLearnerSubjects', req.body);
        const newLearnerSubjects = req.body.subjects.map((subjectId) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
            return yield (0, knex_1.default)('learner_subject_combination')
                .insert({
                student_number: req.body.student_number,
                subject_id: subjectId,
                combination_id: 'A',
            })
                .onConflict(['student_number', 'subject_id', 'combination_id'])
                .merge()
                .returning('*');
        }));
        return res.status(http_status_codes_1.StatusCodes.OK).json(newLearnerSubjects);
    }
    catch (error) {
        return next(error);
    }
});
exports.setLearnerSubjects = setLearnerSubjects;
const registerLearner = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        console.log('learner object', req.body.learner);
        let newLearner = yield (0, knex_1.default)('learner').insert(JSON.parse(req.body.learner), '*');
        return res.json({ message: 'FILES RECEIVED', uploaded: newLearner });
    }
    catch (error) {
        return next(error);
    }
});
exports.registerLearner = registerLearner;
