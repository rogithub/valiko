"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var validatorInterfaces = __importStar(require("./validator/interfaces"));
exports.validatorInterfaces = validatorInterfaces;
var fieldInterfaces = __importStar(require("./field/interfaces"));
exports.fieldInterfaces = fieldInterfaces;
var koForm = require("./form/koForm");
exports.koForm = koForm;
