"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base class for validation rules.
 */
var ValidatorBase = /** @class */ (function () {
    function ValidatorBase(errorMessage) {
        this.errorMessage = errorMessage;
    }
    ValidatorBase.prototype.toPromise = function (isValid) {
        var self = this;
        var result = {
            isValid: isValid,
            message: isValid ? "" : self.errorMessage
        };
        return Promise.resolve(result);
    };
    ValidatorBase.prototype.isNullOrUndefined = function (value) {
        return value === null || value === undefined;
    };
    ValidatorBase.prototype.toResult = function (isValid) {
        var self = this;
        return self.toPromise(isValid);
    };
    ValidatorBase.prototype.toNotValid = function () {
        var self = this;
        return self.toResult(false);
    };
    ValidatorBase.prototype.toValid = function () {
        var self = this;
        return self.toResult(true);
    };
    return ValidatorBase;
}());
exports.ValidatorBase = ValidatorBase;
