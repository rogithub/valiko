"use strict";
var PromiseUtils = /** @class */ (function () {
    function PromiseUtils() {
    }
    /**
     * Converts a value into a resolved promise.
     * @param value Parameter value for the resolved promise.
     */
    PromiseUtils.toPromise = function (value) {
        var promise = new Promise(function (resolve, reject) {
            resolve(value);
        });
        return promise;
    };
    return PromiseUtils;
}());
module.exports = PromiseUtils;
