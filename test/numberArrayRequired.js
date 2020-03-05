const { RuleBase } = require('../release');

class NumberArrayRequired extends RuleBase {

	check(value) {
		const self = this;
		return self.toResult(value.length > 0);
	}
	constructor() {
		super("Required");
	}

};


module.exports = NumberArrayRequired;
