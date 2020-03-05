/// <reference types="knockout" />
import { IValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";
/**
 * Represents a multiple values field in a form.
 */
export declare class FieldArray<T> extends FieldBase<T, KnockoutObservableArray<T>> {
    value: KnockoutObservableArray<T>;
    /**
     * Constructs a field array.
     * @param ko KnockoutStatic.
     * @param validators
     * @param value Rules to validate this field's value.
     */
    constructor(ko: KnockoutStatic, validators: IValidatorRule<T[]>[], value: KnockoutObservableArray<T>);
}
