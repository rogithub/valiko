"use strict";
exports.__esModule = true;
var koForm = require("./form/koForm");
var Valiko = /** @class */ (function () {
    function Valiko() {
    }
    /**
     * Creates a new form.
     * @param validators List of validation rules.
     */
    Valiko.createForm = function (validators) {
        var form = new koForm();
        return form;
    };
    return Valiko;
}());
exports.Valiko = Valiko;
