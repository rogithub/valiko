var assert = require('assert');
var Model = require('../lib/index');
var PromiseUtils = require('../lib/utils/promiseUtils');

var AutoValidator = {  
  check(value) {
    var isValid = value.length > 0;
    var valid = {
      isValid: isValid,
      message: "This field is invalid"
    }
    return PromiseUtils.toPromise(valid);
  }
};

describe('Model default validator', function() {
  describe('Global validation', function() {
    it('Should not be valid', function(done) {      

        var model = new Model();

        var field = model.addField([AutoValidator], "test");
        var fieldArray = model.addFieldArray([AutoValidator], [1]);

        assert.equal(model.hasError(), false);
        assert.equal(field.hasError(), false);
        assert.equal(fieldArray.hasError(), false);

        field.value("");        

        var promise = model.validate();

        promise.then(function(isValid1) {

            assert.equal(isValid1, false);
            assert.equal(model.hasError(), true);
            assert.equal(field.hasError(), true);
            assert.equal(fieldArray.hasError(), false);

            field.value("test");
            fieldArray.value([]);
            var promise2 = model.validate();

            promise2.then(function(isValid2) {
                assert.equal(isValid2, false);
                assert.equal(model.hasError(), true);
                assert.equal(field.hasError(), false);
                assert.equal(fieldArray.hasError(), true);
                
                field.value("test");
                fieldArray.value([1]);
                var promise3 = model.validate();

                promise3.then(function(isValid3) {
                    assert.equal(isValid3, true);
                    assert.equal(model.hasError(), false);
                    assert.equal(field.hasError(), false);
                    assert.equal(fieldArray.hasError(), false);
                    done();
                });
            });
        });
        
        

    });    
  });
});

