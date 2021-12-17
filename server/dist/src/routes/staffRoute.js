"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const staffController_1 = require("src/controllers/staffController");
const multer_1 = (0, tslib_1.__importDefault)(require("multer"));
const uuid_1 = require("uuid");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        const { originalname } = file;
        callback(null, (0, uuid_1.v4)() + originalname);
    },
});
const upload = (0, multer_1.default)({ storage });
const router = (0, express_1.Router)();
router.get('/', staffController_1.getStaff);
exports.default = router;
