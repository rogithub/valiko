import ko = require('knockout');
import * as interfaces from './../validator/interfaces';
import IField = require("./iField");
import FieldBase = require("./fieldBase");


class Field<T> extends FieldBase<KnockoutObservable<T>, T> implements IField<T> {        
    public value: KnockoutObservable<T>;        

    constructor(validators: interfaces.IFieldValidator<T>[], value: T) {
        super(validators, value);        
        
        this.value = ko.observable<T>(value);
        
        const self = this;
        this.value.subscribe(function (newValue: T): void {
            self.validate();
        });        
    } 
}

export = Field;