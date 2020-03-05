const { ObsFrm } = require('../release');
const ko = require('./koMock');
let StringRequired = require('./stringRequired');
const Form = require('./form');

describe('Form', () => {
	describe('addField', () => {
		it('field not valid', (done) => {
			let frm = new Form(ko);

			expect(frm.hasError()).toBeFalse();
			frm.validate().then(valid => expect(valid).toBeFalse()).then(done);
		});
	});
});

describe('Form', () => {
	describe('addField', () => {
		it('field valid', (done) => {			
			let frm = new Form(ko);
			
			expect(frm.hasError()).toBeFalse();
			frm.load({
				numbers: [1],
				name: "Jhon"
			});
			frm.validate().then(valid => expect(valid).toBeTrue()).then(done);
		});
	});
});