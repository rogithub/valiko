import { IValidatorRule, IValidationResult } from './interfaces';
/**
 * Base class for validation rules.
 */
export declare abstract class ValidatorBase<T> implements IValidatorRule<T> {
    errorMessage: string;
    constructor(errorMessage: string);
    abstract check(value?: T): Promise<IValidationResult>;
    private toPromise;
    protected isNullOrUndefined(value?: T): boolean;
    protected toResult(isValid: boolean): Promise<IValidationResult>;
    protected toNotValid(): Promise<IValidationResult>;
    protected toValid(): Promise<IValidationResult>;
}
