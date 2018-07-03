import { IValidatable } from './interfaces';
import { IValidationResult } from './interfaces';
import ValidatorBase = require("./validatorBase");
declare class ValidatableValidator<T extends IValidatable> extends ValidatorBase<T[]> {
    private message;
    constructor(message: string);
    check(value?: T[]): Promise<IValidationResult>;
}
export = ValidatableValidator;
