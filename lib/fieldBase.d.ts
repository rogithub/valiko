/// <reference types="knockout" />
import { ValidatorRule, KoFieldBase } from './interfaces';
/**
 * Base class for fields.
 */
export declare abstract class FieldBase<T, Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>> implements KoFieldBase<T, Ko> {
    validators: ValidatorRule<T | T[]>[];
    abstract value: Ko;
    errors: KnockoutObservableArray<string>;
    protected initialized: KnockoutObservable<boolean>;
    wasValidated: KnockoutObservable<boolean>;
    hasError: KnockoutComputed<boolean>;
    ko: KnockoutStatic;
    constructor(ko: KnockoutStatic, validators: ValidatorRule<T | T[]>[]);
    /**
     * Applies existing validator rules to current value.
     * The first time it is invoked, sets wasValidated to true.
     */
    validate(): Promise<boolean>;
}
