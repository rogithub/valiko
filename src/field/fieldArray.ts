import ko = require('knockout');
import { IFieldValidator } from './../validator/interfaces';
import { IFieldArray } from "./interfaces";
import FieldBase = require("./fieldBase");

class FieldArray<T> extends FieldBase<KnockoutObservableArray<T>, T> implements IFieldArray<T> {    
    public value: KnockoutObservableArray<T>;

    constructor(validators: IFieldValidator<T[]>[], value?: T[]) {
        super(validators, value);        
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
}

export = FieldArray;