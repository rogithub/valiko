const { FieldArray } = require('../release');
let NumberArrayRequired = require('./numberArrayRequired');

const ko = require('./koMock');

describe('FieldArray', () => {
	describe('constructor', () => {
		it('initialized() should be false for new obj', (done) => {
			var fld = new FieldArray(ko, [], ko.observableArray());
			expect(fld.hasError()).toBe(false);
			fld.value([1]);
			expect(fld.hasError()).toBe(false);
			expect(fld.value()).toEqual([1]);
			done();
		});
	});
});

describe('FieldArray', () => {
	describe('validation', () => {
		it('should not be valid', (done) => {
			var fld = new FieldArray(ko, [new NumberArrayRequired()], ko.observableArray());
			fld.value([]);
			fld.validate().then(valid => expect(valid).toBeFalse()).then(done);
		});
	});
});

describe('FieldArray', () => {
	describe('validation', () => {
		it('should be valid', (done) => {
			var fld = new FieldArray(ko, [new NumberArrayRequired()], ko.observableArray());
			fld.value([1]);
			fld.validate().then(valid => expect(valid).toBeTrue()).then(done);
		});
	});
});


