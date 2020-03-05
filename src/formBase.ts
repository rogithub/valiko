import { IValidatorRule, IField, IFieldArray, IFieldArrayConfig, IFieldConfig } from './interfaces';
import { DefaultFormValidator } from "./defaultFormValidator";
import { Field } from "./field";
import { FieldBase } from "./fieldBase";
import { FieldArray } from "./fieldArray";

/**
 * Represents a form with a collection of Fields.
 */
export abstract class FormBase<TModel> extends FieldBase<FieldBase<any, any>, KnockoutObservableArray<FieldBase<any, any>>> {
	public history: KnockoutObservableArray<TModel>;
	public value: KnockoutObservableArray<FieldBase<any, any>>;


	/**
	 * Base class for Forms.
	 * @param ko KnockoutStatic.
	 * @param validators Rules to validate this form's fields.
	 */
	constructor(ko: KnockoutStatic, validators: IValidatorRule<FieldBase<any, any>[]>[] = [new DefaultFormValidator<FieldBase<any, any>>("Please fix all errors.")]) {
		super(ko, validators);
		this.value = ko.observableArray<FieldBase<any, any>>();
		this.history = ko.observableArray<TModel>([]);
	}

	public abstract load(model: TModel): void;
	public abstract retrieve(): TModel;

	private addToHistory(): void {
		const self = this;
		this.history.push(self.retrieve());
	}

	/**
	 * Adds a new Field to this form object.
	 * @param config Initial value
	 * @param validators Validation rules to apply on new Field.
	 */
	public addField<T>(config: IFieldConfig<T>): IField<T> {
		const self = this;

		let validators = config.validators === undefined ? [] : config.validators;
		let value = config.observable === undefined ? self.ko.observable<T>() : config.observable;

		let field = new Field<T>(self.ko, validators, value);

		self.value.push(field);

		field.value.subscribe(function (newValue: T): void {
			self.addToHistory();
		});

		return field;
	}

	/**
	 * Adds a new FieldArray to this form object.
	 * @param config Initial value.
	 * @param validators Validation rules to apply on new FieldArray.
	 */
	public addFieldArray<T>(config: IFieldArrayConfig<T>): IFieldArray<T> {
		const self = this;

		let validators = config.validators === undefined ? [] : config.validators;
		let value = config.observable === undefined ? self.ko.observableArray<T>() : config.observable;

		let field = new FieldArray<T>(self.ko, validators, value);
		self.value.push(field);

		self.value.subscribe(function (changes: KnockoutArrayChange<T>): void {
			self.addToHistory();
		}, self, "arrayChange");

		return field;
	}
}