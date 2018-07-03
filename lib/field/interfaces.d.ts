/// <reference types="knockout" />
import { IFieldValidator } from './../validator/interfaces';
interface IField<T> {
    value: KnockoutObservable<T>;
    validators: IFieldValidator<T>[];
    errors: KnockoutObservableArray<string>;
    hasChanged: KnockoutComputed<boolean>;
    hasError: KnockoutComputed<boolean>;
    validate(): Promise<boolean>;
    resetHasChanged(): void;
}
interface IFieldArray<T> {
    value: KnockoutObservableArray<T>;
    validators: IFieldValidator<T[]>[];
    errors: KnockoutObservableArray<string>;
    hasChanged: KnockoutComputed<boolean>;
    hasError: KnockoutComputed<boolean>;
    validate(): Promise<boolean>;
    resetHasChanged(): void;
}
interface IFieldBase<Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>, T> {
    value: Ko;
    validators: IFieldValidator<T | T[]>[];
    errors: KnockoutObservableArray<string>;
    hasChanged: KnockoutComputed<boolean>;
    hasError: KnockoutComputed<boolean>;
    validate(): Promise<boolean>;
    resetHasChanged(): void;
}
export { IField, IFieldArray, IFieldBase };
