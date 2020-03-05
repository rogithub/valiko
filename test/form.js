const { ObsFrm } = require('../release');
let StringRequired = require('./stringRequired');
let NumberArrayRequired = require('./numberArrayRequired');

class Form extends ObsFrm {

	constructor(ko) {
		super(ko);
        this.numbers = this.addArr().with(new NumberArrayRequired());
        this.name = this.add().with(new StringRequired());
	}

	load(model) {
		const self = this;
        self.numbers.value(model.numbers);
        self.name.value(model.name);
	}

	retrieve() {
		const self = this;
		return {
            numbers: self.numbers.value(),
            name: self.name.value()
		}
    }
}


module.exports = Form;