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

describe('Model with one fieldArray', function() {
  describe('Adding fieldArray', function() {
    it('Should be valid', function(done) {      

        var model = new valiko.FormBase();
        var fieldArray = model.addFieldArray([ValidValidator]);

        assert.deepEqual(model.value(), [fieldArray]);
        assert.deepEqual(model.validators, [{"message": "Please fix all errors."}]);
        assert.deepEqual(model.errors(), []);  
        assert.equal(model.hasError(), false);
        assert.equal(fieldArray.hasError(), false);
        
        model.validate();

        var promise = model.validate();
        promise.then(function(validationResult) {
          assert.equal(validationResult, true);
          assert.deepEqual(fieldArray.errors(), []);          
          assert.equal(model.hasError(), false);
          assert.equal(fieldArray.hasError(), false);
          assert.equal(fieldArray.hasError(), false);
          done();
        });      
    });    
  });
});

describe('Model with one fieldArray', function() {
  describe('Adding fieldArray', function() {
    it('Should NOT be valid', function(done) {      

        var model = new valiko.FormBase();
        var fieldArray = model.addFieldArray([NotValidValidator]);

        assert.deepEqual(model.value(), [fieldArray]);
        assert.deepEqual(model.validators, [{"message": "Please fix all errors."}]);
        assert.deepEqual(model.errors(), []);
        assert.equal(model.hasError(), false);
        assert.equal(fieldArray.hasError(), false);
        
        var promise = model.validate();
        promise.then(function(validationResult) {
          assert.equal(validationResult, false);
          
          assert.equal(model.hasError(), true);
          assert.equal(model.errors().length, 1);
          assert.equal(model.errors()[0], "Please fix all errors.");

          assert.equal(fieldArray.hasError(), true);          
          assert.equal(fieldArray.errors().length, 1);
          assert.equal(fieldArray.errors()[0], "This field is invalid");

          done();
        });
    });    
  });
});