var assert = require('assert');
var valiko = require('../lib/index');
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

describe('Reset hasChanged', function() {
  describe('Changing values', function() {
    it('Resseting hasChanged', function() {      

        var model = new valiko.FormBase();

        var field = model.addField([AutoValidator], "test");
        var fieldArray = model.addFieldArray([AutoValidator], [1]);

        assert.equal(model.hasChanged(), false);
        assert.equal(field.hasChanged(), false);
        assert.equal(fieldArray.hasChanged(), false);

        field.value("changed value");

        assert.equal(model.hasChanged(), true);
        assert.equal(field.hasChanged(), true);
        assert.equal(fieldArray.hasChanged(), false);

        fieldArray.value([1, 2]);

        assert.equal(model.hasChanged(), true);
        assert.equal(field.hasChanged(), true);
        assert.equal(fieldArray.hasChanged(), true);        

        model.resetHasChanged();
        field.value.valueHasMutated();
        fieldArray.value.valueHasMutated();

        assert.equal(field.hasChanged(), false);
        assert.equal(fieldArray.hasChanged(), false);
        assert.equal(model.hasChanged(), false);

    });    
  });
});

