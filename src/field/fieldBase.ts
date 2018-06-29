import ko = require('knockout');
import { IValidatable } from './../validator/interfaces';
import { IFieldValidator } from './../validator/interfaces';
import { IFieldBase } from "./interfaces";
import PromiseUtils = require('./../utils/promiseUtils');

abstract class FieldBase<Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>, T> implements IFieldBase<Ko, T>, IValidatable {
    public validators: IFieldValidator<T | T[]>[];
    public abstract value: Ko;
    public errors: KnockoutObservableArray<string>;
    public hasChanged: KnockoutComputed<boolean>;
    public hasError: KnockoutComputed<boolean>;    
    protected initialValue?: T | T[];

    constructor(validators: IFieldValidator<T | T[]>[], value?: T | T[]) {
        this.validators = validators;
        this.initialValue = value;        

        this.errors = ko.observableArray<string>([]);

        const self = this;        

        this.hasChanged = ko.pureComputed<boolean>(function (): boolean {
            return self.getHasChanged();
        }, self);
        this.hasError = ko.pureComputed<boolean>(function (): boolean {
            return self.errors().length > 0;
        }, self);
    }

    public async validate(): Promise<boolean> {
        const self = this;
        self.errors.removeAll();

        let isValid = true;

        for (let validator of self.validators) {
            let result = await validator.check(self.value());

            if (result.isValid === false) {
                self.errors.push(result.message);
                isValid = false;
            }
        }

        return PromiseUtils.toPromise(isValid);
    }

    protected getHasChanged(): boolean {
        const self = this;
        let changedVal = (self.initialValue !== self.value());

        return changedVal;
    }

    public resetHasChanged(): void {
        const self = this;
        self.initialValue = self.value();
    }
}

export = FieldBase;