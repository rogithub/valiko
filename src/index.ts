import * as validatorInterfaces from './validator/interfaces';
import * as fieldInterfaces from './field/interfaces';
import koForm = require("./form/koForm");

export class Valiko {
    /**
     * Creates a new form.
     * @param validators List of validation rules.
     */
    public static createForm<T>(validators: validatorInterfaces.IFieldValidator<fieldInterfaces.IFieldBase<any, any>[]>[]): koForm {
        let form = new koForm();
        return form;
    }
}

