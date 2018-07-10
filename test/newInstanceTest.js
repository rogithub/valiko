var assert = require('assert');
var valiko = require('../lib/index');

describe('Model Creation', function() {
  describe('Model Instance', function() {
    it('Should be a new object with default validator', function() {

        var model = new valiko.FormBase();                
        assert.deepEqual(model.value(), []);
        assert.deepEqual(model.validators, [{"message": "Please fix all errors."}]);
        assert.deepEqual(model.errors(), []);        
        assert.equal(model.hasChanged(), false);
        assert.equal(model.hasError(), false);               
    });

    it('Should be a new object without default validator', function() {
  
        var model = new valiko.FormBase([]);                
        assert.deepEqual(model.value(), []);
        assert.deepEqual(model.validators, []);
        assert.deepEqual(model.errors(), []);        
        assert.equal(model.hasChanged(), false);
        assert.equal(model.hasError(), false);
      });

  });
});