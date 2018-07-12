import { IValidatable } from './interfaces';
import { IValidationResult } from './interfaces';
import { ValidatorBase } from "./validatorBase";
/**
 * Validator that runs all validations on a IValidatable.
 */
export declare class ValidatableValidator<T extends IValidatable> extends ValidatorBase<T[]> {
    private message;
    /**
     * Message to display if errors.
     * @param message Error message
     */
    constructor(message: string);
    /**
     * Runs all validation rules against given value.
     * @param value Current value.
     */
    check(value?: T[]): Promise<IValidationResult>;
}
