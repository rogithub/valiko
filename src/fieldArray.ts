
import { IValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";

/**
 * Represents a multiple values field in a form.
 */
export class FieldArray<T> extends FieldBase<T, KnockoutObservableArray<T>>  {
	public value: KnockoutObservableArray<T>;

	/**
	 * Constructs a field array.
	 * @param ko KnockoutStatic.
	 * @param validators Rules to validate this field's value.
	 */
	constructor(ko: KnockoutStatic, validators: IValidatorRule<T[]>[]) {
		super(ko, validators);
		this.value = this.ko.observableArray<T>();

		const self = this;
		self.value.subscribe(function (changes: KnockoutArrayChange<T>): void {
			if (self.initialized() === false) {
				self.initialized(true);
			}

		}, self, "arrayChange");
	}
}