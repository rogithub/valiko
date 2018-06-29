import ko = require('knockout');
import { IFieldValidator} from './../validator/interfaces';
import { IField } from "./interfaces";
import FieldBase = require("./fieldBase");


class Field<T> extends FieldBase<KnockoutObservable<T>, T> implements IField<T> {        
    public value: KnockoutObservable<T>;        

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