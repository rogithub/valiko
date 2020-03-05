
import { IValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";

/**
 * Represents a single value field in a form.
 */
export class Field<T> extends FieldBase<T, KnockoutObservable<T>> {
	public value: KnockoutObservable<T>;

	/**
	 * Constructs a field with a single value.
	 * @param ko KnockoutStatic.
	 * @param validators Rules to validate this field's value. 
	 * @param value Initial value.
	 */
	constructor(ko: KnockoutStatic, validators: IValidatorRule<T>[], value: KnockoutObservable<T>) {
		super(ko, validators);
		this.value = value;

		const self = this;
		this.value.subscribe(function (newValue: T): void {

			if (self.initialized() === false) {
				self.initialized(true);
			}

			self.validate();
		});
	}
}