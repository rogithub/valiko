const ko = require('./koMock');
const Form = require('./form');


describe('Form', () => {
	describe('addFieldArray', () => {
		it('fieldArray not valid', (done) => {
			let frm = new Form(ko);
			expect(frm.hasError()).toBeFalse();
			frm.validate().then(valid => expect(valid).toBeFalse()).then(done);
		});
	});
});


describe('Form', () => {
	describe('addFieldArray', () => {
		it('fieldArray valid', (done) => {
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
