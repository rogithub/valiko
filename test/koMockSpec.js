

const ko = require('./koMock');

describe('ko', () => {
    describe('observable', () => {
        it('shold get value', (done) => {
            let obs = ko.observable(1);
            expect(obs()).toBe(1);
            done();
        });

        it('shold set value', (done) => {
            let obs = ko.observable();
            obs(1);
            expect(obs()).toBe(1);
            done();
        });
    });

    describe('observable array', () => {

        it('shold get value', (done) => {
            let obs = ko.observableArray([1]);
            expect(obs()[0]).toBe(1);
            done();
        });

        it('shold set value', (done) => {
            let obs = ko.observableArray();
            obs([1]);
            expect(obs()[0]).toBe(1);
            done();
        });
    });

    describe('observable subscribe', () => {

        it('shold notify value', (done) => {
            let obs = ko.observable();

            obs.subscribe(newValue => {
                expect(newValue).toBe(1);
                done();
            });
            obs(1);
        });
    });

    describe('observable array subscribe', () => {

        it('shold notify value', (done) => {
            let obs = ko.observableArray();

            obs.subscribe(newValue => {
                expect(newValue[0]).toBe(1);
                done();
            });

            obs([1]);
        });
    });

    describe('observable array removeAll', () => {

        it('shold clear the array', (done) => {
            let obs = ko.observableArray([1]);
            expect(obs()[0]).toBe(1);
            expect(obs().length).toBe(1);
            obs.removeAll();
            expect(obs().length).toBe(0);
            done();
        });
    });

    describe('observable array push', () => {

        it('shold add one item', (done) => {
            let obs = ko.observableArray([1]);
            expect(obs()[0]).toBe(1);
            expect(obs().length).toBe(1);
            obs.push(2);
            expect(obs().length).toBe(2);
            expect(obs()[0]).toBe(1);
            expect(obs()[1]).toBe(2);
            done();
        });
    });

    describe('pure computed', () => {

        it('shold compute a value', (done) => {

            let obs = ko.observable(1);
            let oArr = ko.observableArray([1]);

            let pure = ko.pureComputed(() => {
                return obs() + oArr()[0];
            });

            expect(pure()).toBe(2);

            done();
        });
    });
});



