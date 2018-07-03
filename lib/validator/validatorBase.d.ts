import { IFieldValidator } from './interfaces';
import { IValidationResult } from './interfaces';
/**
 * Base class for validation rules.
 */
declare abstract class ValidatorBase<T> implements IFieldValidator<T> {
    abstract check(value?: T): Promise<IValidationResult>;
    protected toPromise(isValid: boolean, message?: string): Promise<IValidationResult>;
}
export = ValidatorBase;
