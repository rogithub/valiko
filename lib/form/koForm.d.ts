/// <reference types="knockout" />
import { IFieldValidator } from './../validator/interfaces';
import { IField } from "./../field/interfaces";
import { IFieldBase } from "./../field/interfaces";
import { IFieldArray } from "./../field/interfaces";
import FieldBase = require("./../field/fieldBase");
declare class KoForm extends FieldBase<KnockoutObservableArray<IFieldBase<any, any>>, IFieldBase<any, any>> {
    value: KnockoutObservableArray<IFieldBase<any, any>>;
    constructor(validators?: IFieldValidator<IFieldBase<any, any>[]>[]);
    resetHasChanged(): void;
    protected getHasChanged(): boolean;
    addField<T>(validators: IFieldValidator<T>[], value: T): IField<T>;
    addFieldArray<T>(validators: IFieldValidator<T[]>[], value?: T[]): IFieldArray<T>;
}
export = KoForm;
