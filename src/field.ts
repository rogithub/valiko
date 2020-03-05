
import { ValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";

/**
 * Represents a single value field in a form.
 */
export class Field<T> extends FieldBase<T, KnockoutObservable<T>> {
	public value: KnockoutObservable<T>;

	/**
	 * Constructs a field with a single value.
	 * @param ko KnockoutStatic.
	 * @param value Initial value.
	 */
	constructor(ko: KnockoutStatic, value: KnockoutObservable<T> = ko.observable<T>()) {
		super(ko);
		this.value = value;
		this.validators = new Array<ValidatorRule<T>>();

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
	with = (...validators: ValidatorRule<T>[]) : Field<T> => {
		const self= this;
		for(let v of validators) {
			self.validators.push(v);
		}
		return self;
	} 
}