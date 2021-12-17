"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaff = void 0;
const tslib_1 = require("tslib");
const knex_1 = (0, tslib_1.__importDefault)(require("db/knex"));
const getStaff = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let staff = yield (0, knex_1.default)('staff').select().orderBy('surname', 'asc');
        res.json(staff);
    }
    catch (error) {
        return next(error);
    }
});
exports.getStaff = getStaff;
