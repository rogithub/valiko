/// <reference types="knockout" />
import { IValidatorRule, IFieldBase } from './interfaces';
/**
 * Base class for fields.
 */
export declare abstract class FieldBase<T, Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>> implements IFieldBase<T, Ko> {
    validators: IValidatorRule<T | T[]>[];
    abstract value: Ko;
    errors: KnockoutObservableArray<string>;
    protected initialized: KnockoutObservable<boolean>;
    wasValidated: KnockoutObservable<boolean>;
    hasError: KnockoutComputed<boolean>;
    constructor(validators: IValidatorRule<T | T[]>[]);
    /**
     * Applies existing validator rules to current value.
     * The first time it is invoked, sets wasValidated to true.
     */
    validate(): Promise<boolean>;
}
