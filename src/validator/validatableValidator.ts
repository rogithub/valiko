import * as interfaces from './interfaces';
import ValidatorBase = require("./validatorBase");


class ValidatableValidator<T extends interfaces.IValidatable> extends ValidatorBase<T[]> {
    private message: string;

    constructor(message: string) {
        super();
        this.message = message;
    }

    public async check(value?: T[]): Promise<interfaces.IValidationResult> {
        const self = this;
        let isValid = true;

        if (value === null || value === undefined) {
            return self.toPromise(isValid, self.message);
        }

        for (let f of value) {
            if (await f.validate() === false) {
                isValid = false;
            }
        }

        return self.toPromise(isValid, self.message);
    }
}

export = ValidatableValidator;