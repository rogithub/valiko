/// <reference types="knockout" />
import { IValidatorRule, IField, IFieldArray } from './interfaces';
import { FieldBase } from "./fieldBase";
/**
 * Represents a form with a collection of Fields.
 */
export declare abstract class FormBase<TModel> extends FieldBase<FieldBase<any, any>, KnockoutObservableArray<FieldBase<any, any>>> {
    history: KnockoutObservableArray<TModel>;
    value: KnockoutObservableArray<FieldBase<any, any>>;
    /**
     * Constructs a new form object.
     * @param validators Rules to validate this form's fields.
     */
    constructor(validators?: IValidatorRule<FieldBase<any, any>[]>[]);
    abstract load(model: TModel): void;
    abstract retrieve(): TModel;
    private addToHistory;
    /**
     * Adds a new Field to this form object.
     * @param validators Validation rules to apply on new Field.
     */
    addField<T>(validators?: IValidatorRule<T>[]): IField<T>;
    /**
     * Adds a new FieldArray to this form object.
     * @param validators Validation rules to apply on new FieldArray.
     */
    addFieldArray<T>(validators?: IValidatorRule<T[]>[]): IFieldArray<T>;
}
