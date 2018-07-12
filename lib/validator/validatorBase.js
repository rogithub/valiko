"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromiseUtils = require("./../utils/promiseUtils");
/**
 * Base class for validation rules.
 */
var ValidatorBase = /** @class */ (function () {
    function ValidatorBase() {
    }
    ValidatorBase.prototype.toPromise = function (isValid, message) {
        if (message === void 0) { message = ""; }
        var result = {
            isValid: isValid,
            message: isValid ? "" : message
        };
        return PromiseUtils.toPromise(result);
    };
    return ValidatorBase;
}());
exports.ValidatorBase = ValidatorBase;
