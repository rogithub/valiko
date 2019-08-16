var assert = require('assert');
var valiko = require('../lib/index');

var toPromise = function (value) {
  const promise = new Promise((resolve) => {
      resolve(value);
  });

  return promise;
}

var AutoValidator = {  
  check(value) {
    var isValid = value.length > 0;
    var valid = {
      isValid: isValid,
      message: "This field is invalid"
    }
    return toPromise(valid);
  }
};

describe('Value changed', function() {
  describe('Changing value', function() {
    it('Should not be valid', function(done) {      

        var model = new valiko.FormBase();

        var field = model.addFieldArray([AutoValidator], [1], true, function(isValid) {
            assert.equal(isValid, false);
            done();
        });

        assert.equal(model.hasError(), false);
        assert.equal(field.hasError(), false);
        assert.equal(model.hasChanged(), false);
        assert.equal(field.hasChanged(), false);

        field.value([]);
        assert.equal(model.hasChanged(), true);
        assert.equal(field.hasChanged(), true);
    });    
  });
});

describe('Value changed', function() {
    describe('Changing value', function() {
      it('Should be valid', function(done) {      
  
        var model = new valiko.FormBase();
  
        var field = model.addField([AutoValidator], [], true, function(isValid) {
            assert.equal(isValid, true);            
            done();
        });
  
        assert.equal(model.hasError(), false);
        assert.equal(field.hasError(), false);
        assert.equal(model.hasChanged(), false);
        assert.equal(field.hasChanged(), false);
  
        field.value([1]);
        assert.equal(model.hasChanged(), true);
        assert.equal(field.hasChanged(), true);        
      });    
    });
  });
