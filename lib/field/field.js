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
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field(validators, value) {
        var _this = _super.call(this, validators, value) || this;
        _this.value = ko.observable(value);
        var self = _this;
        _this.value.subscribe(function (newValue) {
            self.validate();
        });
        return _this;
    }
    return Field;
}(FieldBase));
module.exports = Field;
