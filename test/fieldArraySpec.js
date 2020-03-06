const { ObsArr } = require('../release');
let NumberArrayRequired = require('./numberArrayRequired');

const ko = require('./koMock');

describe('ObsArr', () => {
	describe('constructor', () => {
		it('initialized() should be false for new obj', (done) => {
			var arr = new ObsArr(ko);
			expect(arr.initialized()).toBeFalse();
			expect(arr.wasValidated()).toBeFalse();
			expect(arr.hasError()).toBeFalse();
			expect(arr.value()).toEqual([]);
			arr.value.push(1);
			arr.validate(); // manual validation
			
			expect(arr.value()).toEqual([1]);
			expect(arr.hasError()).toBeFalse();
			expect(arr.initialized()).toBeTrue();
			expect(arr.wasValidated()).toBeTrue();

			done();
		});
	});
});

describe('Obs', () => {
	describe('constructor', () => {
		it('initialized() should be true', (done) => {
			let item = ko.observableArray([2]);
			var obs = new ObsArr(ko, item);
			obs.initialized(true);

			obs.value([1])

			expect(obs.initialized()).toBeTrue();
			expect(obs.value()).toEqual([1]);
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


