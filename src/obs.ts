
import { Rule, ObsExtension } from './interfaces';
import { ObsBase } from "./obsBase";

/**
 * Represents a single value field in a form.
 */
export class Obs<T> extends ObsBase<T, KnockoutObservable<T>> implements ObsExtension<T>  {
	public value: KnockoutObservable<T>;

	/**
	 * Constructs a field with a single value.
	 * @param ko KnockoutStatic.
	 * @param value Initial value.
	 */
	constructor(ko: KnockoutStatic, value: KnockoutObservable<T> = ko.observable<T>()) {
		super(ko);
		this.value = value;
		this.rules = new Array<Rule<T>>();

		const self = this;
		this.value.subscribe(function (newValue: T): void {

			if (self.initialized() === false) {
				self.initialized(true);
			}

			self.validate();
		});
	}

	/**
	 * Adds validator rules to this field.
	 */
	with = (...validatorRules: Rule<T>[]) : ObsExtension<T> => {
		const self= this;
		for(let v of validatorRules) {
			self.rules.push(v);
		}
		return self;
	} 
}