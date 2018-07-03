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
     */
    function FieldArray(validators, value) {
        var _this = _super.call(this, validators, value) || this;
        _this.value = ko.observableArray(value);
        return _this;
        // =========================================================================
        // "arrayChange": Please subscribe on the cosumer class.
        // =========================================================================        
        // const self = this;
        // this.value.subscribe(function (changes: KnockoutArrayChange<T>): void {
        //     //self.validate();
        // }, self, "arrayChange");
        // =========================================================================
    }
    return FieldArray;
}(FieldBase));
module.exports = FieldArray;
