import { ValidationResult, Validable } from './interfaces';
import { ValidatorBase } from './validatorBase';

/**
 * Validates all fields in the form.
 */
export class DefaultFormValidator<T extends Validable> extends ValidatorBase<T[]> {

    /**
     * Message to display if errors.
     * @param error Error message.
     */
    constructor(error: string) {
        super(error);
    }

    /**
     * Runs all validation rules in all fields in form.
     * @param value Current value.
     */
    public check = async(value?: T[]): Promise<ValidationResult> => {
        const self = this;
        let isValid = true;

        if (self.isNullOrUndefined(value)) {
            return self.toResult(isValid);
        }

        for (let f of value) {
            if (await f.validate() === false) {
                isValid = false;
            }
        }

        return self.toResult(isValid);
    }
}