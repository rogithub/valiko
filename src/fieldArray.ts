
import { ValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";

/**
 * Represents a multiple values field in a form.
 */
export class FieldArray<T> extends FieldBase<T, KnockoutObservableArray<T>>  {
	public value: KnockoutObservableArray<T>;

	/**
	 * Constructs a field array.
	 * @param ko KnockoutStatic.
	 * @param validators 
	 * @param value Rules to validate this field's value.
	 */
	constructor(ko: KnockoutStatic, validators: ValidatorRule<T[]>[], value: KnockoutObservableArray<T>) {
		super(ko, validators);
		this.value = value;

		const self = this;
		self.value.subscribe(function (changes: KnockoutArrayChange<T>): void {
			if (self.initialized() === false) {
				self.initialized(true);
			}

		}, self, "arrayChange");
	}
}