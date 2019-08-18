let assert = require("assert");
import { IFieldArray, FormBase } from '../src';
import { NumberArrayRequired } from './numberArrayRequired';
import ko = require('knockout');
let source = { ko: ko };
Object.assign(global, source);
//global.ko = ko;

interface Account {
	numbers: Array<number>;
}

class Form extends FormBase<Account> {
	public numbers: IFieldArray<number>;

	constructor() {
		super();
		this.numbers = this.addFieldArray<number>([new NumberArrayRequired()]);
	}

	public load(model: Account): void {
		const self = this;
		this.numbers.value(model.numbers);
	}	
	
	public retrieve(): Account {
		const self = this;
		return {
			numbers: self.numbers.value()
		}
	}
}

describe('Form', function() {
    describe('addFieldArray', function() {
		it('fieldArray not valid', function(done) {
			let form = new Form();
			assert.equal(form.hasError(), false);
			form.validate().then(valid => assert.equal(valid, false) ).then(done);			
		});
    });
});

describe('Form', function() {
    describe('addFieldArray', function() {
		it('fieldArray valid', function(done) {
			let form = new Form();
			assert.equal(form.hasError(), false);
			form.numbers.value([1]);
			form.validate().then(valid => assert.equal(valid, true) ).then(done);
		});
    });
});
