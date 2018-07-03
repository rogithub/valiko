/// <reference types="knockout" />
import { IValidatable } from './../validator/interfaces';
import { IFieldValidator } from './../validator/interfaces';
import { IFieldBase } from "./interfaces";
declare abstract class FieldBase<Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>, T> implements IFieldBase<Ko, T>, IValidatable {
    validators: IFieldValidator<T | T[]>[];
    abstract value: Ko;
    errors: KnockoutObservableArray<string>;
    hasChanged: KnockoutComputed<boolean>;
    hasError: KnockoutComputed<boolean>;
    protected initialValue?: T | T[];
    constructor(validators: IFieldValidator<T | T[]>[], value?: T | T[]);
    validate(): Promise<boolean>;
    protected getHasChanged(): boolean;
    resetHasChanged(): void;
}
export = FieldBase;
