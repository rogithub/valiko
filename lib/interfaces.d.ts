/// <reference types="knockout" />
/**
 * Represents an object with eiter a KnockoutObservable or KnockoutObservableArray generic value.
 */
interface IKoValue<T, Ko extends KnockoutObservable<T | undefined> | KnockoutObservableArray<T | undefined>> {
    value: Ko;
}
/**
 * Validation related data for fields.
 */
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
     */
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
 * Represents an object that can be validated.
 * Result will be returned in a promise.
 */
interface IValidable {
    validate(): Promise<boolean>;
}
/**
 * Validation rule for a field.
 */
interface IValidatorRule<T> {
    /**
     * Returns a promise indicating if given value is valid.
     * @param value value to validate against this rule.
     */
    check(value?: T): Promise<IValidationResult>;
}
/** Base for IField and IFieldArray */
interface IFieldBase<T, Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>> extends IValidationInfo<T>, IValidable, IKoValue<T, Ko> {
}
/** Represents a single value field in a form. */
interface IField<T> extends IFieldBase<T, KnockoutObservable<T>> {
}
/** Represents a multiple values field in a form. */
interface IFieldArray<T> extends IFieldBase<T, KnockoutObservableArray<T>> {
}
/**
 * Interfaces for valiko
 */
export { IValidable, IKoValue, IValidationInfo, IValidationResult, IValidatorRule, IFieldBase, IField, IFieldArray };
