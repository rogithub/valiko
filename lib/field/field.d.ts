/// <reference types="knockout" />
import { IFieldValidator } from './../validator/interfaces';
import { IField } from "./interfaces";
import FieldBase = require("./fieldBase");
/**
 * Represents a field in the form with a single value.
 */
declare class Field<T> extends FieldBase<KnockoutObservable<T>, T> implements IField<T> {
    value: KnockoutObservable<T>;
    /**
     * Constructs a field with a single value.
     * @param validators Applied on this field when its value changes.
     * @param value Initial value.
     */
    constructor(validators: IFieldValidator<T>[], value: T);
}
export = Field;
