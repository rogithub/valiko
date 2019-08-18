let assert = require("assert");
import { Field } from '../src';
import ko = require('knockout');
let source = { ko: ko };
Object.assign(global, source);
//global.ko = ko;

describe('Field', function() {
    describe('constructor', function() {
		it('initialized() should be false for new obj', function(done) {
			var fld = new Field([]);
			assert.ok(fld.hasError() === false);
			assert.equal(fld.value(), undefined);
			done();
		});
		it('initialized() should be true after value chage', function(done) {
			var fld = new Field([]);
			fld.value(1);
			assert.ok(fld.hasError() === false);
			assert.equal(fld.value(), 1);
			done();
		});
    });
});
