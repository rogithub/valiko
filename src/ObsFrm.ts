import { ObsExtension, ObsArrExtension } from './interfaces';
import { FrmRule } from "./frmRule";
import { Obs } from "./obs";
import { ObsBase } from "./obsBase";
import { ObsArr } from "./obsArr";

/**
 * Represents a form with a collection of Observables.
 */
export abstract class ObsFrm extends ObsBase<ObsBase<any, any>, KnockoutObservableArray<ObsBase<any, any>>> {
	public value: KnockoutObservableArray<ObsBase<any, any>>;

	/**
	 * Base class for Forms.
	 * @param ko KnockoutStatic.
	 * @param validators Rules to validate this form's Obs.
	 */
	constructor(ko: KnockoutStatic) {
		super(ko);
		this.rules = [new FrmRule<ObsBase<any, any>>("Please fix all errors.")];
		this.value = ko.observableArray<ObsBase<any, any>>();
	}

	/**
	 * Adds a new Obs to this form object.
	 * @param val Initial value.
	 */
	public add = <T>(val?: KnockoutObservable<T>): Obs<T> => {
		const self = this;
		let obs = new Obs<T>(self.ko, val);
		self.value.push(obs);
		return obs;
	}

	/**
	 * Adds a new ObsArr to this form object.
	 * @param val Initial value.
	 */
	public addArr = <T>(val?: KnockoutObservableArray<T>): ObsArr<T> => {
		const self = this;
		let obsArr = new ObsArr<T>(self.ko, val);
		self.value.push(obsArr);
		return obsArr;
	}
}