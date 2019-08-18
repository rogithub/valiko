let assert = require("assert");
import { FieldArray, ValidatorBase } from '../src';
import ko = require('knockout');
let source = { ko: ko };
Object.assign(global, source);
//global.ko = ko;

class ArrayRequired extends ValidatorBase<number[]> {

	public check(value?: number[]): Promise<import("../src/interfaces").IValidationResult> {
		const self = this;
		return self.toResult(value.length > 0);
	}
	constructor() {
		super("Required");
	}

}

describe('FieldArray', function() {
    describe('constructor', function() {
		it('initialized() should be false for new obj', function(done) {
			var fld = new FieldArray<number>([]);
			assert.equal(fld.hasError(), false);			
			fld.value([1]);
			assert.equal(fld.hasError(), false);
			assert.deepEqual(fld.value(), [1]);
			done();
		});
    });
});


describe('FieldArray', function() {
    describe('validation', function() {
		it('should not be valid', function(done) {
			var fld = new FieldArray<number>([new ArrayRequired()]);
			fld.value([]);
			fld.validate().then(valid => assert.equal(valid, false) ).then(done);
		});
    });
});

describe('FieldArray', function() {
    describe('validation', function() {
		it('should be valid', function(done) {
			var fld = new FieldArray<number>([new ArrayRequired()]);
			fld.value([1]);
			fld.validate().then(valid => assert.ok(valid)).then(done);
		});
    });
});
