/// <reference types="knockout" />
import { IFieldValidator } from './../validator/interfaces';
import { IFieldArray } from "./interfaces";
import FieldBase = require("./fieldBase");
declare class FieldArray<T> extends FieldBase<KnockoutObservableArray<T>, T> implements IFieldArray<T> {
    value: KnockoutObservableArray<T>;
    constructor(validators: IFieldValidator<T[]>[], value?: T[]);
}
export = FieldArray;
