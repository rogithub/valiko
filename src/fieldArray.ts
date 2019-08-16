import { IValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";

/**
 * Represents a field in the form with multiple values.
 */
export class FieldArray<T> extends FieldBase<T, KnockoutObservableArray<T>>  {
	public value: KnockoutObservableArray<T>;

    /**
     * Constructs a field with multiple values.
     * @param validators Applied on this field when "validate" method is called.
     * @param value Initial value.
     * @param autovalidate If true trigers validation on value change.
     * @param validationSubscribe Notifies validation results.
     */
	constructor(validators: IValidatorRule<T[]>[]) {
		super(validators);
		this.value = ko.observableArray<T>();

		const self = this;
		self.value.subscribe(function (changes: KnockoutArrayChange<T>): void {
			if (self.initialized() === false) {
				self.initialized(true);
			}

		}, self, "arrayChange");
	}
}