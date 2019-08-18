var assert = require("assert");
var vko = require('../lib');
global.ko = require('knockout');

describe('Field', function() {
    describe('constructor', function() {
		it('initialized() should be false for new obj', function(done) {
			var fld = new vko.Field([]);
			assert.ok(fld.initialized() === false);	
			assert.ok(fld.hasError() === false);
			assert.equal(fld.value(), undefined);
			done();
		});
		it('initialized() should be true after value chage', function(done) {
			var fld = new vko.Field([]);
			fld.value(1);
			assert.ok(fld.initialized());
			assert.ok(fld.hasError() === false);
			assert.equal(fld.value(), 1);
			done();
		});
    });
});
