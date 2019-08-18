let assert = require("assert");
import { FieldArray } from '../src';
import { NumberArrayRequired } from './numberArrayRequired';
import ko = require('knockout');
let source = { ko: ko };
Object.assign(global, source);
//global.ko = ko;



describe('FieldArray', function() {
    describe('constructor', function() {
		it('initialized() should be false for new obj', function(done) {
			var fld = new FieldArray<number>([]);
			assert.equal(fld.hasError(), false);			
			fld.value([1]);
			assert.equal(fld.hasError(), false);
			assert.deepEqual(fld.value(), [1]);
			done();
		});
    });
});


describe('FieldArray', function() {
    describe('validation', function() {
		it('should not be valid', function(done) {
			var fld = new FieldArray<number>([new NumberArrayRequired()]);
			fld.value([]);
			fld.validate().then(valid => assert.equal(valid, false) ).then(done);
		});
    });
});

describe('FieldArray', function() {
    describe('validation', function() {
		it('should be valid', function(done) {
			var fld = new FieldArray<number>([new NumberArrayRequired()]);
			fld.value([1]);
			fld.validate().then(valid => assert.ok(valid)).then(done);
		});
    });
});
