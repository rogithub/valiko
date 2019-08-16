/// <reference types="knockout" />
import { IValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";
/**
 * Represents a field in the form with multiple values.
 */
export declare class FieldArray<T> extends FieldBase<T, KnockoutObservableArray<T>> {
    value: KnockoutObservableArray<T>;
    /**
     * Constructs a field with multiple values.
     * @param validators Applied on this field when "validate" method is called.
     * @param value Initial value.
     * @param autovalidate If true trigers validation on value change.
     * @param validationSubscribe Notifies validation results.
     */
    constructor(validators: IValidatorRule<T[]>[]);
}
