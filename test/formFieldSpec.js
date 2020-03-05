const { FormBase } = require('../release');
const ko = require('./koMock');
let StringRequired = require('./stringRequired');


class Form extends FormBase {

	constructor(ko) {
		super(ko);
		this.name = this.add().with(new StringRequired());
	}

	load(model) {
		const self = this;
		this.name.value(model.name);
	}

	retrieve() {
		const self = this;
		return {
			name: self.name.value()
		}
	}
}

describe('Form', () => {
	describe('addField', () => {
		it('field not valid', (done) => {
			let form = new Form(ko);

			expect(form.hasError()).toBeFalse();
			form.validate().then(valid => expect(valid).toBeFalse()).then(done);
		});
	});
});

describe('Form', () => {
	describe('addField', () => {
		it('field valid', (done) => {
			let form = new Form(ko);
			expect(form.hasError()).toBeFalse();
			form.name.value("jhon");
			form.validate().then(valid => expect(valid).toBeTrue()).then(done);
		});
	});
});