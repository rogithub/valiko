import * as validatorInterfaces from './validator/interfaces';
import * as fieldInterfaces from './field/interfaces';
import koForm = require("./form/koForm");
export declare class Valiko {
    /**
     * Creates a new form.
     * @param validators List of validation rules.
     */
    static createForm<T>(validators: validatorInterfaces.IFieldValidator<fieldInterfaces.IFieldBase<any, any>[]>[]): koForm;
}
