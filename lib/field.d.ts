/// <reference types="knockout" />
import { IValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";
/**
 * Represents a single value field in a form.
 */
export declare class Field<T> extends FieldBase<T, KnockoutObservable<T>> {
    value: KnockoutObservable<T>;
    /**
     * Constructs a field with a single value.
     * @param validators Rules to validate this field's value.
     */
    constructor(ko: KnockoutStatic, validators: IValidatorRule<T>[]);
}
