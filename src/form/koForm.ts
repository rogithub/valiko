import { IFieldValidator } from './../validator/interfaces';

import { IField } from "./../field/interfaces";
import { IFieldBase } from "./../field/interfaces";
import { IFieldArray } from "./../field/interfaces";

import Field = require("./../field/field");
import FieldBase = require("./../field/fieldBase");
import FieldArray = require("../field/fieldArray");
import ValidatableValidator = require("../validator/validatableValidator");

class KoForm extends FieldBase<KnockoutObservableArray<IFieldBase<any, any>>, IFieldBase<any, any>> {    
    
    public value: KnockoutObservableArray<IFieldBase<any, any>>;    
    
    constructor(validators: IFieldValidator<IFieldBase<any, any>[]>[] = [new ValidatableValidator<IFieldBase<any, any>>("Please fix all errors.")]) {
        super(validators, []);
        this.value = ko.observableArray<IFieldBase<any, any>>();
    }

    public resetHasChanged(): void {
        const self = this;
        for (let field of self.value()) {
            field.resetHasChanged();
        }
    }

    protected getHasChanged(): boolean {
        const self = this;
        for (let field of self.value()) {
            if (field.hasChanged()) {
                return true;
            }
        }

        return false;
    }

    public addField<T>(validators: IFieldValidator<T>[], value: T): IField<T> {
        const self = this;

        let field: IField<T> = new Field<T>(validators, value);

        self.value.push(field);

        return field;
    }

    public addFieldArray<T>(validators: IFieldValidator<T[]>[], value?: T[]): IFieldArray<T> {
        const self = this;                

        let field: IFieldArray<T> = new FieldArray<T>(validators, value);

        self.value.push(field);

        return field;
    }
}

export = KoForm;