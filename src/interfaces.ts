/**
 * Represents an object with eiter a KnockoutObservable or KnockoutObservableArray generic value.
 */
interface KoObservable<T, TT extends KnockoutObservable<T | undefined> | KnockoutObservableArray<T | undefined>> {
    value: TT;
}

/**
 * Validation related data for Obs.
 */
interface KoErrInfo<T> {

    /**
     * Rules that validate current Obs value.
     */
    rules: KoRule<T | T[]>[];
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
interface KoResult {
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
interface KoValidable {
    validate(): Promise<boolean>;
}

/**
 * Validation rule for a Obs.
 */
interface KoRule<T> {
	/**
	 * Returns a promise indicating if given value is valid.
	 * @param value value to validate against this rule.
	 */
    check(value?: T): Promise<KoResult>;
}

/** Base for IField and IFieldArray */
interface KoObsBase<T, TT extends KnockoutObservable<T> | KnockoutObservableArray<T>> extends KoErrInfo<T>, KoValidable, KoObservable<T, TT> { }

/** Represents a single value Obs in a form. */
interface KoObs<T> extends KoObsBase<T, KnockoutObservable<T>> { }

/** Represents a multiple values Obs in a form. */
interface KoObsArr<T> extends KoObsBase<T, KnockoutObservableArray<T>> { }

/**
 * Interfaces for valiko
 */
export {
    KoValidable,
    KoObservable,
    KoErrInfo,
    KoResult,
    KoRule,
    KoObsBase,
    KoObs,
    KoObsArr
}