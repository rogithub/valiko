var assert = require('assert');
var valiko = require('../lib/index');
var PromiseUtils = require('../lib/utils/promiseUtils');

var NotValidValidator = {  
  check(value) {
    var notValid = {
      isValid: false,
      message: "This field is invalid"
    }
    return PromiseUtils.toPromise(notValid);
  }
};

var ValidValidator = {  
  check(value) {
    var valid = {
      isValid: true,
      message: ""
    }
    return PromiseUtils.toPromise(valid);
  }
};

describe('Model with one field', function() {
  describe('Adding field', function() {
    it('Should be valid', function(done) {      

        var model = new valiko.KoForm();
        var field = model.addField([ValidValidator], true);

        assert.deepEqual(model.value(), [field]);
        assert.deepEqual(model.validators, [{"message": "Please fix all errors."}]);
        assert.deepEqual(model.errors(), []); 
        assert.equal(field.hasError(), false);
        
        model.validate();

        var promise = model.validate();
        promise.then(function(validationResult) {
          assert.equal(validationResult, true);
          assert.deepEqual(field.errors(), []);          
          assert.equal(model.hasError(), false);
          assert.equal(field.hasError(), false);
          done();
        });      
    });    
  });
});

describe('Model with one field', function() {
  describe('Adding field', function() {
    it('Should NOT be valid', function(done) {      

        var model = new valiko.KoForm();
        var field = model.addField([NotValidValidator], true);

        assert.deepEqual(model.value(), [field]);
        assert.deepEqual(model.validators, [{"message": "Please fix all errors."}]);
        assert.deepEqual(model.errors(), []);
        assert.equal(field.hasError(), false);
        
        
        var promise = model.validate();
        promise.then(function(validationResult) {
          assert.equal(validationResult, false);
          
          assert.equal(model.hasError(), true);
          assert.equal(model.errors().length, 1);
          assert.equal(model.errors()[0], "Please fix all errors.");

          assert.equal(field.hasError(), true);          
          assert.equal(field.errors().length, 1);
          assert.equal(field.errors()[0], "This field is invalid");

          done();
        });
    });    
  });
});