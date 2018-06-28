import * as interfaces from './../validator/interfaces';

interface IFieldBase<Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>, T> {
    value: Ko;
    validators: interfaces.IFieldValidator<T | T[]>[];
    errors: KnockoutObservableArray<string>;
    hasChanged: KnockoutComputed<boolean>;
    hasError: KnockoutComputed<boolean>;
    validate(): Promise<boolean>;
    resetHasChanged(): void;
}

export = IFieldBase;