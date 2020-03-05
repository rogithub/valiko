import { ValidatorRule, ValidationResult } from './interfaces';


/**
 * Base class for validation rules.
 */
export abstract class ValidatorBase<T> implements ValidatorRule<T> {
	public errorMessage: string;
	constructor(errorMessage: string) {
		this.errorMessage = errorMessage;
	}

	public abstract check(value?: T): Promise<ValidationResult>;

	private toPromise = (isValid: boolean): Promise<ValidationResult> => {
		const self = this;
		let result: ValidationResult = {
			isValid: isValid,
			message: isValid ? "" : self.errorMessage
		};

		return Promise.resolve(result);
	}

	protected isNullOrUndefined = (value?: T): boolean => {
		return value === null || value === undefined;
	}
	
	protected toResult = (isValid: boolean): Promise<ValidationResult> => {
		const self = this;
		return self.toPromise(isValid);
	}

	protected toNotValid = (): Promise<ValidationResult> => {
		const self = this;
		return self.toResult(false);
	}

	protected toValid = (): Promise<ValidationResult> => {
		const self = this;
		return self.toResult(true);
	}
}