const { ValidatorBase } = require('../lib');

class NumberArrayRequired extends ValidatorBase {

	check(value) {
		const self = this;
		if (value === null || value === undefined || value.length === 0) {
			return self.toNotValid();
		}

		return self.toValid();
	}
	constructor() {
		super("Required");
	}

};


module.exports = NumberArrayRequired;
