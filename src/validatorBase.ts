import { IValidatorRule, IValidationResult } from './interfaces';


/**
 * Base class for validation rules.
 */
export abstract class ValidatorBase<T> implements IValidatorRule<T> {
	public errorMessage: string;
	constructor(errorMessage: string) {
		this.errorMessage = errorMessage;
	}

	public abstract check(value?: T): Promise<IValidationResult>;

	private toPromise(isValid: boolean): Promise<IValidationResult> {
		const self = this;
		let result: IValidationResult = {
			isValid: isValid,
			message: isValid ? "" : self.errorMessage
		};

		return Promise.resolve(result);
	}

	protected isNullOrUndefined(value?: T): boolean {
		return value === null || value === undefined;
	}
	
	protected toResult(isValid: boolean): Promise<IValidationResult> {
		const self = this;
		return self.toPromise(isValid);
	}

	protected toNotValid(): Promise<IValidationResult> {
		const self = this;
		return self.toResult(false);
	}

	protected toValid(): Promise<IValidationResult> {
		const self = this;
		return self.toResult(true);
	}
}