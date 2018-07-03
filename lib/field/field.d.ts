/// <reference types="knockout" />
import { IFieldValidator } from './../validator/interfaces';
import { IField } from "./interfaces";
import FieldBase = require("./fieldBase");
declare class Field<T> extends FieldBase<KnockoutObservable<T>, T> implements IField<T> {
    value: KnockoutObservable<T>;
    constructor(validators: IFieldValidator<T>[], value: T);
}
export = Field;
