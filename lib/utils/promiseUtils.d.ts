declare class PromiseUtils {
    /**
     * Converts a value into a resolved promise.
     * @param value Parameter value for the resolved promise.
     */
    static toPromise<T>(value: T): Promise<T>;
}
export = PromiseUtils;
