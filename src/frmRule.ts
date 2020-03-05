import { KoResult, KoValidable } from './interfaces';
import { RuleBase } from './ruleBase';

/**
 * Validates all Observables in the form.
 */
export class FrmRule<T extends KoValidable> extends RuleBase<T[]> {

    /**
     * Message to display if errors.
     * @param error Error message.
     */
    constructor(error: string) {
        super(error);
    }

    /**
     * Runs all validation rules in all Observables in form.
     * @param value Current value.
     */
    public check = async(value?: T[]): Promise<KoResult> => {
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