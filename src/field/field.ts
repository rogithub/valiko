import ko = require('knockout');
import { IFieldValidator} from './../validator/interfaces';
import { IField } from "./interfaces";
import FieldBase = require("./fieldBase");

/**
 * Represents a field in the form with a single value.
 */
class Field<T> extends FieldBase<KnockoutObservable<T>, T> implements IField<T> {        
    public value: KnockoutObservable<T>;        

    /**
     * Constructs a field with a single value.
     * @param validators Applied on this field when its value changes.
     * @param value Initial value.
     */
    constructor(validators: IFieldValidator<T>[], value: T) {
        super(validators, value);        
        
        this.value = ko.observable<T>(value);
        
        const self = this;
        this.value.subscribe(function (newValue: T): void {
            self.validate();
        });        
    } 
}

export = Field;