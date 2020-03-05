const { ObsArr } = require('../release');
let NumberArrayRequired = require('./numberArrayRequired');

const ko = require('./koMock');

describe('ObsArr', () => {
	describe('constructor', () => {
		it('initialized() should be false for new obj', (done) => {
			var fld = new ObsArr(ko);
			expect(fld.hasError()).toBe(false);
			fld.value([1]);
			expect(fld.hasError()).toBe(false);
			expect(fld.value()).toEqual([1]);
			done();
		});
	});
});

describe('ObsArr', () => {
	describe('validation', () => {
		it('should not be valid', (done) => {
			var fld = new ObsArr(ko);
			fld.rules.push(new NumberArrayRequired());
			fld.value([]);
			fld.validate().then(valid => expect(valid).toBeFalse()).then(done);
		});
	});
});

describe('ObsArr', () => {
	describe('validation', () => {
		it('should be valid', (done) => {
			var fld = new ObsArr(ko);
			fld.rules.push(new NumberArrayRequired());
			fld.value([1]);
			fld.validate().then(valid => expect(valid).toBeTrue()).then(done);
		});
	});
});


