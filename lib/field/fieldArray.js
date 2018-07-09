"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var ko = __importStar(require("knockout"));
var FieldBase = require("./fieldBase");
/**
 * Represents a field in the form with multiple values.
 */
var FieldArray = /** @class */ (function (_super) {
    __extends(FieldArray, _super);
    /**
     * Constructs a field with multiple values.
     * @param validators Applied on this field when "validate" method is called.
     * @param value Initial value.
     * @param autovalidate If true trigers validation on value change.
     * @param validationSubscribe Notifies validation results.
     */
    function FieldArray(validators, value, autovalidate, onValidation) {
        if (value === void 0) { value = []; }
        if (autovalidate === void 0) { autovalidate = false; }
        var _this = _super.call(this, validators, value) || this;
        _this.value = ko.observableArray(value);
        if (autovalidate === false)
            return _this;
        var self = _this;
        self.value.subscribe(function (changes) {
            var promise = self.validate();
            if (onValidation !== undefined && onValidation !== null) {
                promise.then(onValidation);
            }
        }, self, "arrayChange");
        return _this;
    }
    return FieldArray;
}(FieldBase));
module.exports = FieldArray;
