"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cookie_parser_1 = (0, tslib_1.__importDefault)(require("cookie-parser"));
const morgan_1 = (0, tslib_1.__importDefault)(require("morgan"));
const helmet_1 = (0, tslib_1.__importDefault)(require("helmet"));
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const http_status_codes_1 = require("http-status-codes");
require("express-async-errors");
const index_1 = (0, tslib_1.__importDefault)(require("routes/index"));
const Logger_1 = (0, tslib_1.__importDefault)(require("shared/Logger"));
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
if (process.env.NODE_ENV === 'production') {
    app.use((0, helmet_1.default)());
}
app.use(index_1.default);
app.use((err, req, res, next) => {
    Logger_1.default.error(err.message, err);
    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        error: err.message,
    });
});
exports.default = app;
