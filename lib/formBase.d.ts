/// <reference types="knockout" />
import { ValidatorRule, KoField, KoFieldArray, FieldArrayConfig, FieldConfig } from './interfaces';
import { FieldBase } from "./fieldBase";
/**
 * Represents a form with a collection of Fields.
 */
export declare abstract class FormBase<TModel> extends FieldBase<FieldBase<any, any>, KnockoutObservableArray<FieldBase<any, any>>> {
    history: KnockoutObservableArray<TModel>;
    value: KnockoutObservableArray<FieldBase<any, any>>;
    /**
     * Base class for Forms.
     * @param ko KnockoutStatic.
     * @param validators Rules to validate this form's fields.
     */
    constructor(ko: KnockoutStatic, validators?: ValidatorRule<FieldBase<any, any>[]>[]);
    abstract load(model: TModel): void;
    abstract retrieve(): TModel;
    private addToHistory;
    /**
     * Adds a new Field to this form object.
     * @param config Initial value
     * @param validators Validation rules to apply on new Field.
     */
    addField<T>(config: FieldConfig<T>): KoField<T>;
    /**
     * Adds a new FieldArray to this form object.
     * @param config Initial value.
     * @param validators Validation rules to apply on new FieldArray.
     */
    addFieldArray<T>(config: FieldArrayConfig<T>): KoFieldArray<T>;
}
