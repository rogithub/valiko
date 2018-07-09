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
 * Represents a field in the form with a single value.
 */
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    /**
     * Constructs a field with a single value.
     * @param validators Applied on this field when its value changes.
     * @param value Initial value.
     * @param autovalidate If true trigers validation on value change.
     * @param onValidation Notifies validation results.
     */
    function Field(validators, value, autovalidate, onValidation) {
        if (autovalidate === void 0) { autovalidate = true; }
        var _this = _super.call(this, validators, value) || this;
        _this.value = ko.observable(value);
        var self = _this;
        if (autovalidate === false)
            return _this;
        _this.value.subscribe(function (newValue) {
            var promise = self.validate();
            if (onValidation !== undefined && onValidation !== null) {
                promise.then(onValidation);
            }
        });
        return _this;
    }
    return Field;
}(FieldBase));
module.exports = Field;
