class ObservableArray {

    constructor(value) {
        this.value = value;
        if (this.value === undefined) {
            this.value = [];
        }
        this.subscribers = [];
        this.subscribe = (fn) => this.subscribers.push(fn);
        this.removeAll = () => this.value = [];
        this.push = (it) => {
            this.value.push(it);
        }
    }

    set() {
        const self = this;
        if (arguments.length === 0) {
            return self.value;
        }
        self["value"] = arguments[0];
        for (let fn of self.subscribers) {
            fn(arguments[0]);
        }
    }
}

class Observable {

    constructor(value) {
        this.value = value;
        this.subscribers = [];
        this.subscribe = (fn) => this.subscribers.push(fn);
    }

    set() {
        const self = this;

        if (arguments.length === 0) {
            return self.value;
        }
        self["value"] = arguments[0];
        for (let fn of self.subscribers) {
            fn(arguments[0]);
        }
    }
}

class PureComputed {

    constructor(cb) {
        this.cb = cb;
        this.subscribers = [];
        this.subscribe = (fn) => this.subscribers.push(fn);
    }

    set() {
        const self = this;

        if (arguments.length === 0) {
            return self.cb();
        }
        self["cb"] = arguments[0];
        for (let fn of self.subscribers) {
            fn(arguments[0]);
        }
    }
}


module.exports = {

    observableArray: (val) => {
        let oA = new ObservableArray(val);

        let f = oA.set.bind(oA);
        let set = Object.assign(f, oA);

        return set;
    },

    observable: (val) => {
        let o = new Observable(val);

        let f = o.set.bind(o);
        let set = Object.assign(f, o);

        return set;
    },

    pureComputed: (fn) => {
        let p = new PureComputed(fn);

        let f = p.set.bind(p);
        let set = Object.assign(f, p);

        return set;
    },

    utils: {
        arrayMap: (source, fn) => {
            let result = [];
            for (let x of source) {
                result.push(fn(x));
            }
            return result;
        },

        arrayFilter: (source, predicate) => {
            let result = [];
            for (let x of source) {
                if (predicate(x)) {
                    result.push(x);
                }
            }
            return result;
        }
    }
}
