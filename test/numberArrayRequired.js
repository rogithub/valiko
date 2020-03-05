const { ValidatorBase } = require('../release');

class NumberArrayRequired extends ValidatorBase {

	check(value) {
		const self = this;
		return self.toResult(value.length > 0);
	}
	constructor() {
		super("Required");
	}

};


module.exports = NumberArrayRequired;
