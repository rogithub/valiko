/**
 * Represents an object with eiter a KnockoutObservable or KnockoutObservableArray generic value.
 */
interface ObsOrObsArr<T, TT extends KnockoutObservable<T | undefined> | KnockoutObservableArray<T | undefined>> {
    value: TT;
}

/**
 * Validation related data for Obs.
 */
interface ErrInfo<T> {

    /**
     * Rules that validate current Obs value.
     */
    rules: Rule<T | T[]>[];
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
interface RuleResult {
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
interface HasValidate {
    validate(): Promise<boolean>;
}

/**
 * Validation rule for a Obs.
 */
interface Rule<T> {
	/**
	 * Returns a promise indicating if given value is valid.
	 * @param value value to validate against this rule.
	 */
    check(value?: T): Promise<RuleResult>;
}

/** Base for IField and IFieldArray */
interface ObsExtensionBase<T, TT extends KnockoutObservable<T> | KnockoutObservableArray<T>> extends ErrInfo<T>, HasValidate, ObsOrObsArr<T, TT> { }

/** Represents a single value Obs in a form. */
interface ObsExtension<T> extends ObsExtensionBase<T, KnockoutObservable<T>> { }

/** Represents a multiple values Obs in a form. */
interface ObsArrExtension<T> extends ObsExtensionBase<T, KnockoutObservableArray<T>> { }

/**
 * Interfaces for valiko
 */
export {
    HasValidate,
    ObsOrObsArr,
    ErrInfo,
    RuleResult,
    Rule,
    ObsExtensionBase,
    ObsExtension,
    ObsArrExtension
}