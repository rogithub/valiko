import { KoField, KoFieldArray } from './interfaces';
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
	constructor(ko: KnockoutStatic) {
		super(ko);
		this.validators = [new DefaultFormValidator<FieldBase<any, any>>("Please fix all errors.")];
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
	 * @param val Initial value.
	 */
	public add<T>(val: KnockoutObservable<T> | undefined): KoField<T> {
		const self = this;

		let value = val === undefined ? self.ko.observable<T>() : val;

		let field = new Field<T>(self.ko, value);

		self.value.push(field);

		field.value.subscribe(function (newValue: T): void {
			self.addToHistory();
		});

		return field;
	}

	/**
	 * Adds a new FieldArray to this form object.
	 * @param val Initial value.
	 */
	public addArray<T>(val: KnockoutObservableArray<T> | undefined): KoFieldArray<T> {
		const self = this;

		let value = val === undefined ? self.ko.observableArray<T>() : val;

		let field = new FieldArray<T>(self.ko, value);
		self.value.push(field);

		self.value.subscribe(function (changes: KnockoutArrayChange<T>): void {
			self.addToHistory();
		}, self, "arrayChange");

		return field;
	}
}