var assert = require("assert");
var vko = require('../lib');
require('knockout');

describe('Field test', function() {
    describe('init', function() {
	it('is field initialized', function(done) {
	    var fld = new vko.Field();
	    console.log(fld);
	    done();
	});
    });
});
