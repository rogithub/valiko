import ko = require('knockout');
import { IFieldValidator } from './../validator/interfaces';
import { IFieldArray } from "./interfaces";
import FieldBase = require("./fieldBase");

/**
 * Represents a field in the form with multiple values.
 */
class FieldArray<T> extends FieldBase<KnockoutObservableArray<T>, T> implements IFieldArray<T> {    
    public value: KnockoutObservableArray<T>;

    /**
     * Constructs a field with multiple values.
     * @param validators Applied on this field when "validate" method is called.
     * @param value Initial value.
     */
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