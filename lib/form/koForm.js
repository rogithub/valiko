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
var ko = require("knockout");
var Field = require("./../field/field");
var FieldBase = require("./../field/fieldBase");
var FieldArray = require("../field/fieldArray");
var ValidatableValidator = require("../validator/validatableValidator");
/**
 * Represents a form with a collection of Fields.
 */
var KoForm = /** @class */ (function (_super) {
    __extends(KoForm, _super);
    /**
     * Constructs a new form object.
     * @param validators List of validation rules.
     */
    function KoForm(validators) {
        if (validators === void 0) { validators = [new ValidatableValidator("Please fix all errors.")]; }
        var _this = _super.call(this, validators, []) || this;
        _this.value = ko.observableArray();
        return _this;
    }
    /**
     * Resets all fields hasChanged attribute.
     */
    KoForm.prototype.resetHasChanged = function () {
        var self = this;
        for (var _i = 0, _a = self.value(); _i < _a.length; _i++) {
            var field = _a[_i];
            field.resetHasChanged();
        }
    };
    /**
     * True if any of its internal fields has changed.
     */
    KoForm.prototype.getHasChanged = function () {
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
    KoForm.prototype.addField = function (validators, value) {
        var self = this;
        var field = new Field(validators, value);
        self.value.push(field);
        return field;
    };
    /**
     * Adds a new field array to this form object.
     */
    KoForm.prototype.addFieldArray = function (validators, value) {
        var self = this;
        var field = new FieldArray(validators, value);
        self.value.push(field);
        return field;
    };
    return KoForm;
}(FieldBase));
module.exports = KoForm;
