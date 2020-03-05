
import { KoRule, KoObsBase } from './interfaces'

/**
 * Base class for Obs.
 */
export abstract class ObsBase<T, TT extends KnockoutObservable<T> | KnockoutObservableArray<T>> implements KoObsBase<T, TT> {
	public rules: KoRule<T | T[]>[];
	public abstract value: TT;
	public errors: KnockoutObservableArray<string>;
	protected initialized: KnockoutObservable<boolean>;
	public wasValidated: KnockoutObservable<boolean>;
	public hasError: KnockoutComputed<boolean>;
	public ko: KnockoutStatic;

	constructor(ko: KnockoutStatic) {
		this.ko = ko;
		this.errors = ko.observableArray<string>([]);
		this.initialized = ko.observable<boolean>(false);
		this.wasValidated = ko.observable<boolean>(false);

		this.hasError = ko.pureComputed<boolean>(() => this.errors().length > 0, this);
	}

    /**
	 * Applies existing validator rules to current value.
	 * The first time it is invoked, sets wasValidated to true.
	 */
	public validate = async(): Promise<boolean> => {
		const self = this;
		self.errors.removeAll();

		let isValid = true;
		
		if (self.wasValidated() === false){
			self.wasValidated(true);
		}
		
		for (let validator of self.rules) {
			let result = await validator.check(self.value());

			if (result.isValid === false) {
				self.errors.push(result.message);
				isValid = false;
			}
		}

		return Promise.resolve(isValid);
	}
}