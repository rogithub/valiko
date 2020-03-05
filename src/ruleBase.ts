import { KoRule, KoResult } from './interfaces';


/**
 * Base class for validation rules.
 */
export abstract class RuleBase<T> implements KoRule<T> {
	public errorMessage: string;
	constructor(errorMessage: string) {
		this.errorMessage = errorMessage;
	}

	public abstract check(value?: T): Promise<KoResult>;

	private toPromise = (isValid: boolean): Promise<KoResult> => {
		const self = this;
		let result: KoResult = {
			isValid: isValid,
			message: isValid ? "" : self.errorMessage
		};

		return Promise.resolve(result);
	}

	protected isNullOrUndefined = (value?: T): boolean => {
		return value === null || value === undefined;
	}
	
	protected toResult = (isValid: boolean): Promise<KoResult> => {
		const self = this;
		return self.toPromise(isValid);
	}

	protected toNotValid = (): Promise<KoResult> => {
		const self = this;
		return self.toResult(false);
	}

	protected toValid = (): Promise<KoResult> => {
		const self = this;
		return self.toResult(true);
	}
}