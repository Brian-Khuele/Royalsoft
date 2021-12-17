"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLearnerStatus = exports.getRelations = exports.getLanguages = exports.getIdtypes = exports.getGenders = exports.getCombinations = exports.getGradeSubjects = exports.getSubjects = exports.getGrades = exports.getCountries = exports.getRoles = exports.getRaces = void 0;
const tslib_1 = require("tslib");
const knex_1 = (0, tslib_1.__importDefault)(require("db/knex"));
const http_status_codes_1 = require("http-status-codes");
const getRaces = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let race = yield (0, knex_1.default)('race').select();
        res.json(race);
    }
    catch (error) {
        return next(error);
    }
});
exports.getRaces = getRaces;
const getRoles = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let roles = yield (0, knex_1.default)('permission').select();
        res.json(roles);
    }
    catch (error) {
        return next(error);
    }
});
exports.getRoles = getRoles;
const getCountries = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let country = yield (0, knex_1.default)('country').select();
        res.json(country);
    }
    catch (error) {
        return next(error);
    }
});
exports.getCountries = getCountries;
const getGrades = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let grade = yield (0, knex_1.default)('grade').select();
        res.json(grade);
    }
    catch (error) {
        return next(error);
    }
});
exports.getGrades = getGrades;
const getSubjects = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let subject = yield (0, knex_1.default)('subject').select();
        res.json(subject);
    }
    catch (error) {
        return next(error);
    }
});
exports.getSubjects = getSubjects;
const getGradeSubjects = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        if (!req.query.grade) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ message: 'Grade missing.' });
        }
        let subjectsInGrade = yield (0, knex_1.default)('subject_grade')
            .select(['subject_id', 'grade', 'description', 'compulsory'])
            .innerJoin('subject', function () {
            this.on('subject_grade.subject_id', 'subject.id');
        })
            .where({ 'subject_grade.grade': req.query.grade });
        return res.status(http_status_codes_1.StatusCodes.OK).json(subjectsInGrade);
    }
    catch (error) {
        return next(error);
    }
});
exports.getGradeSubjects = getGradeSubjects;
const getCombinations = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let combination = yield (0, knex_1.default)('combination').select();
        res.json(combination);
    }
    catch (error) {
        return next(error);
    }
});
exports.getCombinations = getCombinations;
const getGenders = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let gender = yield (0, knex_1.default)('gender').select();
        res.json(gender);
    }
    catch (error) {
        return next(error);
    }
});
exports.getGenders = getGenders;
const getIdtypes = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let idtype = yield (0, knex_1.default)('idtype').select();
        res.json(idtype);
    }
    catch (error) {
        return next(error);
    }
});
exports.getIdtypes = getIdtypes;
const getLanguages = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let languages = yield (0, knex_1.default)('language').select();
        res.json(languages);
    }
    catch (error) {
        return next(error);
    }
});
exports.getLanguages = getLanguages;
const getRelations = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let relations = yield (0, knex_1.default)('relation').select();
        res.json(relations);
    }
    catch (error) {
        return next(error);
    }
});
exports.getRelations = getRelations;
const getLearnerStatus = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let relations = yield (0, knex_1.default)('learner_status').select();
        res.json(relations);
    }
    catch (error) {
        return next(error);
    }
});
exports.getLearnerStatus = getLearnerStatus;
