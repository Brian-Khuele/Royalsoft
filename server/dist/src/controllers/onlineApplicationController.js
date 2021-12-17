"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnlineApplication = void 0;
const tslib_1 = require("tslib");
const knex_1 = (0, tslib_1.__importDefault)(require("db/knex"));
const getOnlineApplication = (req, res, next) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        let onlineApplication = yield (0, knex_1.default)('onlineApplications').select();
        res.json(onlineApplication);
    }
    catch (error) {
        return next(error);
    }
});
exports.getOnlineApplication = getOnlineApplication;
