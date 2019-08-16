import * as ko from "knockout";
import { IValidatorRule } from './interfaces';
import { FieldBase } from "./fieldBase";

/**
 * Represents a field in the form with a single value.
 */
export class Field<T> extends FieldBase<T, KnockoutObservable<T>> {
	public value: KnockoutObservable<T>;

    /**
     * Constructs a field with a single value.
     * @param validators Applied on this field when its value changes.
     * @param value Initial value.
     * @param autovalidate If true trigers validation on value change.
     * @param onValidation Notifies validation results.
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