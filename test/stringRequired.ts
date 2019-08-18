
import { ValidatorBase, IValidationResult } from '../src';

export class StringRequired extends ValidatorBase<string> {
	constructor() {
		super("Required");
	}

	public check(value?: string): Promise<IValidationResult> {
		const self = this;
		if (value === null || value === undefined || value.length === 0) {
			return self.toNotValid();
		}

		return self.toValid();
	}
}