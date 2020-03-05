
const { Field } = require('../release');
let StringRequired = require('./stringRequired');
const ko = require('./koMock');

describe('Field', () => {
	describe('constructor', () => {
		it('initialized() should be false for new obj', (done) => {
			var fld = new Field(ko, [], ko.observable());
			expect(fld.hasError()).toBeFalse();
			expect(fld.value()).toBeUndefined();

			fld.value(1);
			expect(fld.hasError()).toBeFalse();
			expect(fld.value()).toBe(1);
			done();
		});
	});
});


describe('Field', () => {
	describe('validation', () => {
		it('should not be valid', (done) => {
			var fld = new Field(ko, [new StringRequired()], ko.observable());
			expect(fld.value()).toBeUndefined();
			fld.value("");
			fld.validate().then(valid => expect(valid).toBeFalse()).then(done);
		});
	});
});

describe('Field', () => {
	describe('validation', () => {
		it('should be valid', (done) => {
			var fld = new Field(ko, [new StringRequired()], ko.observable());
			expect(fld.value()).toBeUndefined();
			fld.value("hola");
			fld.validate().then(valid => expect(valid).toBeTrue()).then(done);
		});
	});
});