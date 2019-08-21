
import { IValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";

/**
 * Represents a single value field in a form.
 */
export class Field<T> extends FieldBase<T, KnockoutObservable<T>> {
	public value: KnockoutObservable<T>;

    /**
	 * Constructs a field with a single value.
	 * @param validators Rules to validate this field's value.
	 */
	constructor(validators: IValidatorRule<T>[]) {
		super(validators);
		this.value = ko.observable<T>();

		const self = this;
		this.value.subscribe(function (newValue: T): void {

			if (self.initialized() === false) {
				self.initialized(true);
			}

			self.validate();
		});
	}
}