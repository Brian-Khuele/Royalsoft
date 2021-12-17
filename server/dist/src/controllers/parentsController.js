"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParents = void 0;
const tslib_1 = require("tslib");
const knex_1 = (0, tslib_1.__importDefault)(require("db/knex"));
const getParents = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let parent = yield (0, knex_1.default)('parent').select().orderBy('surname', 'asc');
        res.json(parent);
    }
    catch (error) {
        return next(error);
    }
});
exports.getParents = getParents;
