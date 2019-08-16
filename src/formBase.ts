import { IValidatorRule, IField, IFieldArray } from './interfaces';
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
     * Constructs a new form object.
     * @param validators List of validation rules.
     */
	constructor(validators: IValidatorRule<FieldBase<any, any>[]>[] = [new DefaultFormValidator<FieldBase<any, any>>("Please fix all errors.")]) {
		super(validators);
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
     * Adds a new field to this form object.
     */
	public addField<T>(validators: IValidatorRule<T>[] = []): IField<T> {
		const self = this;

		let field = new Field<T>(validators);

		self.value.push(field);

		field.value.subscribe(function (newValue: T): void {
			self.addToHistory();
		});

		return field;
	}

    /**
     * Adds a new field array to this form object.
     */
	public addFieldArray<T>(validators: IValidatorRule<T[]>[] = []): IFieldArray<T> {
		const self = this;
		let field = new FieldArray<T>(validators);
		self.value.push(field);

		self.value.subscribe(function (changes: KnockoutArrayChange<T>): void {
			self.addToHistory();
		}, self, "arrayChange");

		return field;
	}
}