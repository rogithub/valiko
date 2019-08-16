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
var fieldBase_1 = require("./fieldBase");
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
    function Field(validators) {
        var _this = _super.call(this, validators) || this;
        _this.value = ko.observable();
        var self = _this;
        _this.value.subscribe(function (newValue) {
            if (self.initialized() === false) {
                self.initialized(true);
            }
            self.validate();
        });
        return _this;
    }
    return Field;
}(fieldBase_1.FieldBase));
exports.Field = Field;
