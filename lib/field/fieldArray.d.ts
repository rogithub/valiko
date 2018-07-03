/// <reference types="knockout" />
import { IFieldValidator } from './../validator/interfaces';
import { IFieldArray } from "./interfaces";
import FieldBase = require("./fieldBase");
/**
 * Represents a field in the form with multiple values.
 */
declare class FieldArray<T> extends FieldBase<KnockoutObservableArray<T>, T> implements IFieldArray<T> {
    value: KnockoutObservableArray<T>;
    /**
     * Constructs a field with multiple values.
     * @param validators Applied on this field when "validate" method is called.
     * @param value Initial value.
     */
    constructor(validators: IFieldValidator<T[]>[], value?: T[]);
}
export = FieldArray;
