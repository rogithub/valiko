﻿import { Rule, ObsArrExtension } from './interfaces';
import { ObsBase } from "./obsBase";

/**
 * Represents a multiple values field in a form.
 */
export class ObsArr<T> extends ObsBase<T, KnockoutObservableArray<T>> implements ObsArrExtension<T>  {
	public value: KnockoutObservableArray<T>;

	/**
	 * Constructs a field array.
	 * @param ko KnockoutStatic. 
	 * @param value Rules to validate this field's value.
	 */
	constructor(ko: KnockoutStatic, value: KnockoutObservableArray<T> = ko.observableArray<T>()) {
		super(ko);
		this.value = value;
		this.rules = new Array<Rule<T[]>>();

		const self = this;
		self.value.subscribe(function (changes: KnockoutArrayChange<T>): void {
			if (self.initialized() === false) {
				self.initialized(true);
			}

		}, self, "arrayChange");
	}

	/**
	 * Adds validator rules to this field.
	 */
	with = (...validatorRules: Rule<T[]>[]) : ObsArrExtension<T> => {
		const self= this;
		for(let v of validatorRules) {
			self.rules.push(v);
		}
		return self;
	} 
}