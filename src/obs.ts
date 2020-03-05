
import { KoRule } from './interfaces';
import { ObsBase } from "./obsBase";

/**
 * Represents a single value field in a form.
 */
export class Obs<T> extends ObsBase<T, KnockoutObservable<T>> {
	public value: KnockoutObservable<T>;

	/**
	 * Constructs a field with a single value.
	 * @param ko KnockoutStatic.
	 * @param value Initial value.
	 */
	constructor(ko: KnockoutStatic, value: KnockoutObservable<T> = ko.observable<T>()) {
		super(ko);
		this.value = value;
		this.rules = new Array<KoRule<T>>();

		const self = this;
		this.value.subscribe(function (newValue: T): void {

			if (self.initialized() === false) {
				self.initialized(true);
			}

			self.validate();
		});
	}

	/**
	 * Adds validators to this field.
	 */
	with = (...validators: KoRule<T>[]) : Obs<T> => {
		const self= this;
		for(let v of validators) {
			self.rules.push(v);
		}
		return self;
	} 
}