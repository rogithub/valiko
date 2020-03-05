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
 * Represents a multiple values field in a form.
 */
var FieldArray = /** @class */ (function (_super) {
    __extends(FieldArray, _super);
    /**
     * Constructs a field array.
     * @param ko KnockoutStatic.
     * @param validators
     * @param value Rules to validate this field's value.
     */
    function FieldArray(ko, validators, value) {
        var _this = _super.call(this, ko, validators) || this;
        _this.value = value;
        var self = _this;
        self.value.subscribe(function (changes) {
            if (self.initialized() === false) {
                self.initialized(true);
            }
        }, self, "arrayChange");
        return _this;
    }
    return FieldArray;
}(fieldBase_1.FieldBase));
exports.FieldArray = FieldArray;
//# sourceMappingURL=fieldArray.js.map