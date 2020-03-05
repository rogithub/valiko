/**
 * Represents an object with eiter a KnockoutObservable or KnockoutObservableArray generic value.
 */
interface KoValue<T, Ko extends KnockoutObservable<T | undefined> | KnockoutObservableArray<T | undefined>> {
    value: Ko;
}

/**
 * Validation related data for fields.
 */
interface ValidationInfo<T> {

    /**
     * Rules that validate current field value.
     */
    validators: ValidatorRule<T | T[]>[];
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
interface ValidationResult {
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
interface Validable {
    validate(): Promise<boolean>;
}

/**
 * Validation rule for a field.
 */
interface ValidatorRule<T> {
	/**
	 * Returns a promise indicating if given value is valid.
	 * @param value value to validate against this rule.
	 */
    check(value?: T): Promise<ValidationResult>;
}

/** Base for IField and IFieldArray */
interface KoFieldBase<T, Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>> extends ValidationInfo<T>, Validable, KoValue<T, Ko> { }

/** Represents a single value field in a form. */
interface KoField<T> extends KoFieldBase<T, KnockoutObservable<T>> { }

/** Represents a multiple values field in a form. */
interface KoFieldArray<T> extends KoFieldBase<T, KnockoutObservableArray<T>> { }

/**
 * Interfaces for valiko
 */
export {
    Validable,
    KoValue,
    ValidationInfo,
    ValidationResult,
    ValidatorRule,
    KoFieldBase,
    KoField,
    KoFieldArray
}