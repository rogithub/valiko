
const { DefaultFormValidator } = require('../release');

describe('DefaultFormValidator', () => {
    describe('constructor', () => {
        it("constructor() should set property", function (done) {

            let error = "error found";
            let instance = new DefaultFormValidator(error);
            expect(instance.errorMessage).toBe(error);
            done();
        });
    });
});

describe('DefaultFormValidator', () => {
    describe('check', () => {
        it("check() should be valid for empty param", function (done) {
            let error = "error found";
            let isValid = true;
            let instance = new DefaultFormValidator(error);

            let promise = instance.check();
            promise.then(result => {
                expect(result.isValid).toBe(isValid);
                expect(result.message).toBe("");
                done();
            });
        });
    });
});

describe('DefaultFormValidator', () => {
    describe('check', () => {
        it("check() should be valid with validator", function (done) {
            let error = "error found";
            let isValid = true;
            let instance = new DefaultFormValidator(error);
            let validableObj = {
                validate: () => {
                    return Promise.resolve(true);
                }
            }

            let promise = instance.check([validableObj]);
            promise.then(result => {
                expect(result.isValid).toBe(isValid);
                expect(result.message).toBe("");
                done();
            });
        });
    });
});

describe('DefaultFormValidator', () => {
    describe('check', () => {
        it('check() should be valid with validator', (done) => {
            let error = "error found";
            let isValid = false;
            let instance = new DefaultFormValidator(error);
            let validObj = {
                validate: () => {
                    return Promise.resolve(true);
                }
            }
            let notValidObj = {
                validate: () => {
                    return Promise.resolve(false);
                }
            }

            let promise = instance.check([validObj, notValidObj]);
            promise.then(result => {
                expect(result.isValid).toBe(isValid);
                expect(result.message).toBe(error);
                done();
            });
        });
    });
});
