/// <reference types="knockout" />
import { ValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";
/**
 * Represents a single value field in a form.
 */
export declare class Field<T> extends FieldBase<T, KnockoutObservable<T>> {
    value: KnockoutObservable<T>;
    /**
     * Constructs a field with a single value.
     * @param ko KnockoutStatic.
     * @param validators Rules to validate this field's value.
     * @param value Initial value.
     */
    constructor(ko: KnockoutStatic, validators: ValidatorRule<T>[], value: KnockoutObservable<T>);
}
