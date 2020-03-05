
const { Obs } = require('../release');
let StringRequired = require('./stringRequired');
const ko = require('./koMock');

describe('Obs', () => {
	describe('constructor', () => {
		it('initialized() should be false for new obj', (done) => {
			var obs = new Obs(ko);
			expect(obs.initialized()).toBeFalse();
			expect(obs.wasValidated()).toBeFalse();
			expect(obs.hasError()).toBeFalse();
			expect(obs.value()).toBeUndefined();

			obs.value(1); // auto validation

			expect(obs.hasError()).toBeFalse();
			expect(obs.value()).toBe(1);
			expect(obs.initialized()).toBeTrue();
			expect(obs.wasValidated()).toBeTrue();
			done();
		});
	});
});


describe('Obs', () => {
	describe('validation', () => {
		it('should not be valid', (done) => {
			var obs = new Obs(ko).with(new StringRequired());
			expect(obs.value()).toBeUndefined();
			obs.value("");
			obs.validate().then(valid => expect(valid).toBeFalse()).then(done);
		});
	});
});

describe('Obs', () => {
	describe('validation', () => {
		it('should be valid', (done) => {
			var obs = new Obs(ko).with(new StringRequired());
			expect(obs.value()).toBeUndefined();
			obs.value("hola");
			obs.validate().then(valid => expect(valid).toBeTrue()).then(done);
		});
	});
});