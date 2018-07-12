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
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __importStar(require("knockout"));
var field_1 = require("./../field/field");
var fieldBase_1 = require("./../field/fieldBase");
var fieldArray_1 = require("../field/fieldArray");
var validatableValidator_1 = require("../validator/validatableValidator");
/**
 * Represents a form with a collection of Fields.
 */
var FormBase = /** @class */ (function (_super) {
    __extends(FormBase, _super);
    /**
     * Constructs a new form object.
     * @param validators List of validation rules.
     */
    function FormBase(validators) {
        if (validators === void 0) { validators = [new validatableValidator_1.ValidatableValidator("Please fix all errors.")]; }
        var _this = _super.call(this, validators, []) || this;
        _this.value = ko.observableArray();
        return _this;
    }
    /**
     * Resets all fields hasChanged attribute.
     */
    FormBase.prototype.resetHasChanged = function () {
        var self = this;
        for (var _i = 0, _a = self.value(); _i < _a.length; _i++) {
            var field = _a[_i];
            field.resetHasChanged();
        }
    };
    /**
     * True if any of its internal fields has changed.
     */
    FormBase.prototype.getHasChanged = function () {
        var self = this;
        for (var _i = 0, _a = self.value(); _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.hasChanged()) {
                return true;
            }
        }
        return false;
    };
    /**
     * Adds a new field to this form object.
     */
    FormBase.prototype.addField = function (validators, value, autovalidate, onValidation) {
        if (autovalidate === void 0) { autovalidate = true; }
        var self = this;
        var field = new field_1.Field(validators, value, autovalidate, onValidation);
        self.value.push(field);
        return field;
    };
    /**
     * Adds a new field array to this form object.
     */
    FormBase.prototype.addFieldArray = function (validators, value, autovalidate, onValidation) {
        if (value === void 0) { value = []; }
        if (autovalidate === void 0) { autovalidate = false; }
        var self = this;
        var field = new fieldArray_1.FieldArray(validators, value, autovalidate, onValidation);
        self.value.push(field);
        return field;
    };
    return FormBase;
}(fieldBase_1.FieldBase));
exports.FormBase = FormBase;
