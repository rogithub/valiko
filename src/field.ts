
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
	 */
	constructor(ko: KnockoutStatic, validators: IValidatorRule<T>[]) {
		super(ko, validators);
		this.value = this.ko.observable<T>();

		const self = this;
		this.value.subscribe(function (newValue: T): void {

			if (self.initialized() === false) {
				self.initialized(true);
			}

			self.validate();
		});
	}
}