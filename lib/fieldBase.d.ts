/// <reference types="knockout" />
import { IValidatorRule, IFieldBase } from './interfaces';
/**
 * Base class for fields.
 */
export declare abstract class FieldBase<T, Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>> implements IFieldBase<T, Ko> {
    validators: IValidatorRule<T | T[]>[];
    abstract value: Ko;
    errors: KnockoutObservableArray<string>;
    hasError: KnockoutComputed<boolean>;
    protected initialized: KnockoutObservable<boolean>;
    wasValidated: KnockoutObservable<boolean>;
    constructor(validators: IValidatorRule<T | T[]>[]);
    /**
     * Applies existing validators on current value.
     */
    validate(): Promise<boolean>;
}
