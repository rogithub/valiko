import { ValidatorRule, ValidationResult } from './interfaces';
/**
 * Base class for validation rules.
 */
export declare abstract class ValidatorBase<T> implements ValidatorRule<T> {
    errorMessage: string;
    constructor(errorMessage: string);
    abstract check(value?: T): Promise<ValidationResult>;
    private toPromise;
    protected isNullOrUndefined(value?: T): boolean;
    protected toResult(isValid: boolean): Promise<ValidationResult>;
    protected toNotValid(): Promise<ValidationResult>;
    protected toValid(): Promise<ValidationResult>;
}
