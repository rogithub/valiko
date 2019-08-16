/// <reference types="knockout" />
interface IValidable {
    validate(): Promise<boolean>;
}
interface IKoValue<T, Ko extends KnockoutObservable<T | undefined> | KnockoutObservableArray<T | undefined>> {
    value: Ko;
}
interface IValidationInfo<T> {
    /**
     * Rules that validate current field value.
     */
    validators: IValidatorRule<T | T[]>[];
    /**
     * Error list of current value.
     */
    errors: KnockoutObservableArray<string>;
    /**
     * True if there are errors on current value.
     */
    hasError: KnockoutComputed<boolean>;
    /**
     * true if was validated
     * */
    wasValidated: KnockoutObservable<boolean>;
}
/**
 * Result of a validation.
 */
interface IValidationResult {
    /**
     * True if current value is valid.
     */
    isValid: boolean;
    /**
     * Error message if value fails current validation.
     */
    message: string;
}
/**
 * Validation rule for a field.
 */
interface IValidatorRule<T> {
    check(value?: T): Promise<IValidationResult>;
}
interface IFieldBase<T, Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>> extends IValidationInfo<T>, IValidable, IKoValue<T, Ko> {
}
interface IField<T> extends IFieldBase<T, KnockoutObservable<T>> {
}
interface IFieldArray<T> extends IFieldBase<T, KnockoutObservableArray<T>> {
}
export { IValidable, IKoValue, IValidationInfo, IValidationResult, IValidatorRule, IFieldBase, IField, IFieldArray };
