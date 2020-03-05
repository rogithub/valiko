
const { FormBase } = require('../release');
let NumberArrayRequired = require('./numberArrayRequired');
const ko = require('./koMock');

class Form extends FormBase {

	constructor(ko) {
		super(ko);
		this.numbers = this.addArray();
		this.numbers.validators.push(new NumberArrayRequired());
	}

	load(model) {
		const self = this;
		self.numbers.value(model.numbers);
	}

	retrieve() {
		const self = this;
		return {
			numbers: self.numbers.value()
		}
	}
}

describe('Form', () => {
	describe('addFieldArray', () => {
		it('fieldArray not valid', (done) => {
			let form = new Form(ko);
			expect(form.hasError()).toBeFalse();
			form.validate().then(valid => expect(valid).toBeFalse()).then(done);
		});
	});
});


describe('Form', () => {
	describe('addFieldArray', () => {
		it('fieldArray valid', (done) => {
			let form = new Form(ko);
			expect(form.hasError()).toBeFalse();
			form.numbers.value([1]);
			form.validate().then(valid => expect(valid).toBeTrue()).then(done);
		});
	});
});
