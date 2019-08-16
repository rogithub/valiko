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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __importStar(require("knockout"));
var fieldBase_1 = require("./fieldBase");
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
    function FieldArray(validators) {
        var _this = _super.call(this, validators) || this;
        _this.value = ko.observableArray();
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
