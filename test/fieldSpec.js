
const { Obs } = require('../release');
let StringRequired = require('./stringRequired');
const ko = require('./koMock');

describe('Obs', () => {
	describe('constructor', () => {
		it('initialized() should be false for new obj', (done) => {
			var fld = new Obs(ko);
			expect(fld.hasError()).toBeFalse();
			expect(fld.value()).toBeUndefined();

			fld.value(1);
			expect(fld.hasError()).toBeFalse();
			expect(fld.value()).toBe(1);
			done();
		});
	});
});


describe('Obs', () => {
	describe('validation', () => {
		it('should not be valid', (done) => {
			var fld = new Obs(ko).with(new StringRequired());
			expect(fld.value()).toBeUndefined();
			fld.value("");
			fld.validate().then(valid => expect(valid).toBeFalse()).then(done);
		});
	});
});

describe('Obs', () => {
	describe('validation', () => {
		it('should be valid', (done) => {
			var fld = new Obs(ko).with(new StringRequired());
			expect(fld.value()).toBeUndefined();
			fld.value("hola");
			fld.validate().then(valid => expect(valid).toBeTrue()).then(done);
		});
	});
});