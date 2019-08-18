let assert = require("assert");
import { Field } from '../src';
import { StringRequired } from './stringRequired';
import ko = require('knockout');
let source = { ko: ko };
Object.assign(global, source);
//global.ko = ko;

describe('Field', function() {
    describe('constructor', function() {
		it('initialized() should be false for new obj', function(done) {
			var fld = new Field([]);
			assert.equal(fld.hasError(), false);
			assert.equal(fld.value(), undefined);

			fld.value(1);
			assert.equal(fld.hasError(), false);
			assert.equal(fld.value(), 1);
			done();
		});
    });
});


describe('Field', function() {
    describe('validation', function() {
		it('should not be valid', function(done) {
			var fld = new Field<string>([new StringRequired()]);
			assert.equal(fld.value(), undefined);			
			fld.value("");
			fld.validate().then(valid => assert.equal(valid, false) ).then(done);
		});
    });
});

describe('Field', function() {
    describe('validation', function() {
		it('should be valid', function(done) {
			var fld = new Field<string>([new StringRequired()]);
			assert.equal(fld.value(), undefined);			
			fld.value("hola");
			fld.validate().then(valid => assert.ok(valid)).then(done);
		});
    });
});
