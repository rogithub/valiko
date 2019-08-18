"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var defaultFormValidator_1 = require("./defaultFormValidator");
var field_1 = require("./field");
var fieldBase_1 = require("./fieldBase");
var fieldArray_1 = require("./fieldArray");
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
        if (validators === void 0) { validators = [new defaultFormValidator_1.DefaultFormValidator("Please fix all errors.")]; }
        var _this = _super.call(this, validators) || this;
        _this.value = ko.observableArray();
        _this.history = ko.observableArray([]);
        return _this;
    }
    FormBase.prototype.addToHistory = function () {
        var self = this;
        this.history.push(self.retrieve());
    };
    /**
     * Adds a new field to this form object.
     */
    FormBase.prototype.addField = function (validators) {
        if (validators === void 0) { validators = []; }
        var self = this;
        var field = new field_1.Field(validators);
        self.value.push(field);
        field.value.subscribe(function (newValue) {
            self.addToHistory();
        });
        return field;
    };
    /**
     * Adds a new field array to this form object.
     */
    FormBase.prototype.addFieldArray = function (validators) {
        if (validators === void 0) { validators = []; }
        var self = this;
        var field = new fieldArray_1.FieldArray(validators);
        self.value.push(field);
        self.value.subscribe(function (changes) {
            self.addToHistory();
        }, self, "arrayChange");
        return field;
    };
    return FormBase;
}(fieldBase_1.FieldBase));
exports.FormBase = FormBase;
//# sourceMappingURL=formBase.js.map