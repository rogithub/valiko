import { Rule, RuleResult } from './interfaces';


/**
 * Base class for validation rules.
 */
export abstract class RuleBase<T> implements Rule<T> {
	public errorMessage: string;
	constructor(errorMessage: string) {
		this.errorMessage = errorMessage;
	}

	public abstract check(value?: T): Promise<RuleResult>;

	private toPromise = (isValid: boolean): Promise<RuleResult> => {
		const self = this;
		let result: RuleResult = {
			isValid: isValid,
			message: isValid ? "" : self.errorMessage
		};

		return Promise.resolve(result);
	}

	protected isNullOrUndefined = (value?: T): boolean => {
		return value === null || value === undefined;
	}
	
	protected toResult = (isValid: boolean): Promise<RuleResult> => {
		const self = this;
		return self.toPromise(isValid);
	}

	protected toNotValid = (): Promise<RuleResult> => {
		const self = this;
		return self.toResult(false);
	}

	protected toValid = (): Promise<RuleResult> => {
		const self = this;
		return self.toResult(true);
	}
}