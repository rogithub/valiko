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
var assert = require("assert");
var src_1 = require("../src");
var ko = require("knockout");
var source = { ko: ko };
Object.assign(global, source);
//global.ko = ko;
var StringRequired = /** @class */ (function (_super) {
    __extends(StringRequired, _super);
    function StringRequired() {
        return _super.call(this, "Required") || this;
    }
    StringRequired.prototype.check = function (value) {
        var self = this;
        if (value === null || value === undefined || value.length === 0) {
            return self.toNotValid();
        }
        return self.toValid();
    };
    return StringRequired;
}(src_1.ValidatorBase));
describe('Field', function () {
    describe('constructor', function () {
        it('initialized() should be false for new obj', function (done) {
            var fld = new src_1.Field([]);
            assert.equal(fld.hasError(), false);
            assert.equal(fld.value(), undefined);
            fld.value(1);
            assert.equal(fld.hasError(), false);
            assert.equal(fld.value(), 1);
            done();
        });
    });
});
describe('Field', function () {
    describe('validation', function () {
        it('should not be valid', function (done) {
            var fld = new src_1.Field([new StringRequired()]);
            assert.equal(fld.value(), undefined);
            fld.value("");
            fld.validate().then(function (valid) { return assert.equal(valid, false); }).then(done);
        });
    });
});
describe('Field', function () {
    describe('validation', function () {
        it('should be valid', function (done) {
            var fld = new src_1.Field([new StringRequired()]);
            assert.equal(fld.value(), undefined);
            fld.value("hola");
            fld.validate().then(function (valid) { return assert.ok(valid); }).then(done);
        });
    });
});
//# sourceMappingURL=fieldTest.js.map