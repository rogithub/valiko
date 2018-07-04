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
     * @param autovalidate If true trigers validation on value change.
     * @param onValidation Notifies validation results.
     */
    constructor(validators: IFieldValidator<T>[], value: T, autovalidate?: boolean, onValidation?: (result: boolean) => void);
}
export = Field;
