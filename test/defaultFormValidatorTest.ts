let assert = require("assert");
import { DefaultFormValidator, IValidable } from '../src';
import ko = require('knockout');
let source = { ko: ko };
Object.assign(global, source);
//global.ko = ko;

describe('DefaultFormValidator', function () {
    describe('constructor', function () {
        it('constructor() should set property', function (done) {
            let error = "error found";
            let instance = new DefaultFormValidator(error);
            assert.equal(instance.errorMessage, error);
            done();
        });
    });
});

describe('DefaultFormValidator', function () {
    describe('check', function () {
        it('check() should be valid for empty param', function (done) {
            let error = "error found";
            let isValid = true;
            let instance = new DefaultFormValidator(error);

            let promise = instance.check();
            promise.then(result => {
                assert.equal(result.isValid, isValid);
                assert.equal(result.message, "");
                done();
            });
        });
    });
});

describe('DefaultFormValidator', function () {
    describe('check', function () {
        it('check() should be valid with validator', function (done) {
            let error = "error found";
            let isValid = true;
            let instance = new DefaultFormValidator(error);
            let validableObj: IValidable = {
                validate: () => {
                    return Promise.resolve(true);
                }
            }

            let promise = instance.check([validableObj]);
            promise.then(result => {
                assert.equal(result.isValid, isValid);
                assert.equal(result.message, "");
                done();
            });
        });
    });
});

describe('DefaultFormValidator', function () {
    describe('check', function () {
        it('check() should be valid with validator', function (done) {
            let error = "error found";
            let isValid = false;
            let instance = new DefaultFormValidator(error);
            let validObj: IValidable = {
                validate: () => {
                    return Promise.resolve(true);
                }
            }
            let notValidObj: IValidable = {
                validate: () => {
                    return Promise.resolve(false);
                }
            }

            let promise = instance.check([validObj, notValidObj]);
            promise.then(result => {
                assert.equal(result.isValid, isValid);
                assert.equal(result.message, error);
                done();
            });
        });
    });
});
