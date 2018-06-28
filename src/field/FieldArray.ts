import ko = require('knockout');
import * as interfaces from './../validator/interfaces';
import IFieldArray = require("./iFieldArray");
import FieldBase = require("./fieldBase");


class FieldArray<T> extends FieldBase<KnockoutObservableArray<T>, T> implements IFieldArray<T> {    
    public value: KnockoutObservableArray<T>;

    constructor(validators: interfaces.IFieldValidator<T[]>[], useStrictForComparations: boolean = true, value?: T[]) {
        super(validators, useStrictForComparations, value);        
        this.value = ko.observableArray<T>(value);

        // =========================================================================
        // "arrayChange": Please subscribe on the cosumer class.
        // =========================================================================        
        // const self = this;
        // this.value.subscribe(function (changes: KnockoutArrayChange<T>): void {
        //     //self.validate();
        // }, self, "arrayChange");
        // =========================================================================
    }

    protected getHasChanged(): boolean {
        throw new Error("Not implemented exception");
    }

    public resetHasChanged(): void {
        const self = this;
        self.initialValue = self.value();
    }    
}

export = FieldArray;