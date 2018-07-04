/// <reference types="knockout" />
import { IValidatable } from './../validator/interfaces';
import { IFieldValidator } from './../validator/interfaces';
import { IFieldBase } from "./interfaces";
/**
 * Base class for fields.
 */
declare abstract class FieldBase<Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>, T> implements IFieldBase<Ko, T>, IValidatable {
    validators: IFieldValidator<T | T[]>[];
    abstract value: Ko;
    errors: KnockoutObservableArray<string>;
    hasChanged: KnockoutComputed<boolean>;
    hasError: KnockoutComputed<boolean>;
    protected initialValue: string;
    constructor(validators: IFieldValidator<T | T[]>[], value?: T | T[]);
    /**
     * Applies existing validators on current value.
     */
    validate(): Promise<boolean>;
    /**
     * True if current value is distinct of initial value.
     */
    protected getHasChanged(): boolean;
    /**
     * Assigns the current value to initialValue.
     */
    resetHasChanged(): void;
}
export = FieldBase;
