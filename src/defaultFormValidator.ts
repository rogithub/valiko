import { IValidationResult, IValidable } from './interfaces';
import { ValidatorBase } from './validatorBase';

/**
 * Validator that runs all validations on a IValidatable.
 */
export class DefaultFormValidator<T extends IValidable> extends ValidatorBase<T[]> {

    /**
     * Message to display if errors.
     * @param error Error message
     */
	constructor(error: string) {
		super(error);
	}

    /**
     * Runs all validation rules against given value.
     * @param value Current value.
     */
	public async check(value?: T[]): Promise<IValidationResult> {
		const self = this;
		let isValid = true;

		if (value === null || value === undefined) {
			return self.toResult(isValid);
		}

		for (let f of value) {
			if (await f.validate() === false) {
				isValid = false;
			}
		}

		return self.toResult(isValid);
	}
}