﻿
import { IValidatorRule, IFieldBase } from './interfaces'

/**
 * Base class for fields.
 */
export abstract class FieldBase<T, Ko extends KnockoutObservable<T> | KnockoutObservableArray<T>> implements IFieldBase<T, Ko> {
	public validators: IValidatorRule<T | T[]>[];
	public abstract value: Ko;
	public errors: KnockoutObservableArray<string>;
	protected initialized: KnockoutObservable<boolean>;
	public wasValidated: KnockoutObservable<boolean>;
	public hasError: KnockoutComputed<boolean>;

	constructor(validators: IValidatorRule<T | T[]>[]) {
		this.validators = validators;

		this.errors = ko.observableArray<string>([]);
		this.initialized = ko.observable<boolean>(false);
		this.wasValidated = ko.observable<boolean>(false);
		
		this.hasError = ko.pureComputed<boolean>(() => this.errors().length > 0, this) as unknown as KnockoutComputed<boolean>;
	}

    /**
	 * Applies existing validator rules to current value.
	 * The first time it is invoked, sets wasValidated to true.
	 */
	public async validate(): Promise<boolean> {
		const self = this;
		self.errors.removeAll();

		let isValid = true;
		self.wasValidated(true);

		for (let validator of self.validators) {
			let result = await validator.check(self.value());

			if (result.isValid === false) {
				self.errors.push(result.message);
				isValid = false;
			}
		}

		return Promise.resolve(isValid);
	}
}