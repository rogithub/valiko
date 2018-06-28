﻿import * as interfaces from './../validator/interfaces';

interface IFieldArray<T> {
    value: KnockoutObservableArray<T>;
    validators: interfaces.IFieldValidator<T[]>[];
    errors: KnockoutObservableArray<string>;
    hasChanged: KnockoutComputed<boolean>;
    hasError: KnockoutComputed<boolean>;
    validate(): Promise<boolean>;
    resetHasChanged(): void;
}

export = IFieldArray;