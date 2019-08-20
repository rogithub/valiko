import { IValidationResult, IValidable } from './interfaces';
import { ValidatorBase } from './validatorBase';
/**
 * Validator that runs all validations on a IValidatable.
 */
export declare class DefaultFormValidator<T extends IValidable> extends ValidatorBase<T[]> {
    /**
     * Message to display if errors.
     * @param error Error message
     */
    constructor(error: string);
    /**
     * Runs all validation rules against given value.
     * @param value Current value.
     */
    check(value?: T[]): Promise<IValidationResult>;
}
