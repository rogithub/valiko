import { IFieldValidator } from './../validator/interfaces';

import { IField } from "./../field/interfaces";
import { IFieldBase } from "./../field/interfaces";
import { IFieldArray } from "./../field/interfaces";

import Field = require("./../field/field");
import FieldBase = require("./../field/fieldBase");
import FieldArray = require("../field/fieldArray");
import ValidatableValidator = require("../validator/validatableValidator");

/**
 * Represents a form with a collection of Fields.
 */
class KoForm extends FieldBase<KnockoutObservableArray<IFieldBase<any, any>>, IFieldBase<any, any>> {    
    
    public value: KnockoutObservableArray<IFieldBase<any, any>>;    
    
    /**
     * Constructs a new form object.
     * @param validators List of validation rules.
     */
    constructor(validators: IFieldValidator<IFieldBase<any, any>[]>[] = [new ValidatableValidator<IFieldBase<any, any>>("Please fix all errors.")]) {
        super(validators, []);
        this.value = ko.observableArray<IFieldBase<any, any>>();
    }

    /**
     * Resets all fields hasChanged attribute.
     */
    public resetHasChanged(): void {
        const self = this;
        for (let field of self.value()) {
            field.resetHasChanged();
        }
    }

    /**
     * True if any of its internal fields has changed.
     */
    protected getHasChanged(): boolean {
        const self = this;
        for (let field of self.value()) {
            if (field.hasChanged()) {
                return true;
            }
        }

        return false;
    }

    /**
     * Adds a new field to this form object.
     */
    public addField<T>(validators: IFieldValidator<T>[], value: T): IField<T> {
        const self = this;

        let field: IField<T> = new Field<T>(validators, value);

        self.value.push(field);

        return field;
    }

    /**
     * Adds a new field array to this form object.
     */
    public addFieldArray<T>(validators: IFieldValidator<T[]>[], value?: T[]): IFieldArray<T> {
        const self = this;                

        let field: IFieldArray<T> = new FieldArray<T>(validators, value);

        self.value.push(field);

        return field;
    }
}

export = KoForm;