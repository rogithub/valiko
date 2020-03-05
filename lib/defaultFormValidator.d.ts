import { ValidationResult, Validable } from './interfaces';
import { ValidatorBase } from './validatorBase';
/**
 * Validates all fields in the form.
 */
export declare class DefaultFormValidator<T extends Validable> extends ValidatorBase<T[]> {
    /**
     * Message to display if errors.
     * @param error Error message.
     */
    constructor(error: string);
    /**
     * Runs all validation rules in all fields in form.
     * @param value Current value.
     */
    check(value?: T[]): Promise<ValidationResult>;
}
