/// <reference types="knockout" />
import { IValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";
/**
 * Represents a field in the form with a single value.
 */
export declare class Field<T> extends FieldBase<T, KnockoutObservable<T>> {
    value: KnockoutObservable<T>;
    /**
     * Constructs a field with a single value.
     * @param validators Applied on this field when its value changes.
     * @param value Initial value.
     * @param autovalidate If true trigers validation on value change.
     * @param onValidation Notifies validation results.
     */
    constructor(validators: IValidatorRule<T>[]);
}
