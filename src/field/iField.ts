import ko = require('knockout');
import * as interfaces from './../validator/interfaces';

interface IField<T> {
    value: KnockoutObservable<T>;
    validators: interfaces.IFieldValidator<T>[];
    errors: KnockoutObservableArray<string>;
    hasChanged: KnockoutComputed<boolean>;
    hasError: KnockoutComputed<boolean>;
    validate(): Promise<boolean>;
    resetHasChanged(): void;
}

export = IField;