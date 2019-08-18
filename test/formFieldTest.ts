let assert = require("assert");
import { IField, FormBase } from '../src';
import { StringRequired } from './stringRequired';
import ko = require('knockout');
let source = { ko: ko };
Object.assign(global, source);
//global.ko = ko;

interface Person {
	name: string;
}

class Form extends FormBase<Person> {
	public name: IField<string>;

	constructor() {
		super();
		this.name = this.addField<string>([new StringRequired()]);
	}

	public load(model: Person): void {
		const self = this;
		this.name.value(model.name);
	}	
	
	public retrieve(): Person {
		const self = this;
		return {
			name: self.name.value()
		}
	}
}

describe('Form', function() {
    describe('addField', function() {
		it('field not valid', function(done) {
			let form = new Form();
			assert.equal(form.hasError(), false);
			form.validate().then(valid => assert.equal(valid, false) ).then(done);			
		});
    });
});

describe('Form', function() {
    describe('addField', function() {
		it('field valid', function(done) {
			let form = new Form();
			assert.equal(form.hasError(), false);
			form.name.value("jhon");
			form.validate().then(valid => assert.equal(valid, true) ).then(done);
		});
    });
});
