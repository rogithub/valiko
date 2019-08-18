import { ValidatorBase, IValidationResult } from '../src';


export class NumberArrayRequired extends ValidatorBase<number[]> {

	public check(value?: number[]): Promise<IValidationResult> {
		const self = this;
		return self.toResult(value.length > 0);
	}
	constructor() {
		super("Required");
	}

}