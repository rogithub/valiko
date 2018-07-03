/// <reference types="knockout" />
import { IFieldValidator } from './../validator/interfaces';
import { IField } from "./../field/interfaces";
import { IFieldBase } from "./../field/interfaces";
import { IFieldArray } from "./../field/interfaces";
import FieldBase = require("./../field/fieldBase");
/**
 * Represents a form with a collection of Fields.
 */
declare class KoForm extends FieldBase<KnockoutObservableArray<IFieldBase<any, any>>, IFieldBase<any, any>> {
    value: KnockoutObservableArray<IFieldBase<any, any>>;
    /**
     * Constructs a new form object.
     * @param validators List of validation rules.
     */
    constructor(validators?: IFieldValidator<IFieldBase<any, any>[]>[]);
    /**
     * Resets all fields hasChanged attribute.
     */
    resetHasChanged(): void;
    /**
     * True if any of its internal fields has changed.
     */
    protected getHasChanged(): boolean;
    /**
     * Adds a new field to this form object.
     */
    addField<T>(validators: IFieldValidator<T>[], value: T): IField<T>;
    /**
     * Adds a new field array to this form object.
     */
    addFieldArray<T>(validators: IFieldValidator<T[]>[], value?: T[]): IFieldArray<T>;
}
export = KoForm;
