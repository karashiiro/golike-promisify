"use strict";

import "regenerator-runtime";

/**
 * Converts an error-first callback function to a Go-like promisified function.
 * @param {Function} fn The error-first callback function to convert.
 * @returns {Function} A function that returns a Promise that resolves to an error-first array of callback arguments.
 */
export function promisify(fn) {
    return (...args) => {
        return new Promise((resolve) => {
            args.push((...cbargs) => {
                console.log(cbargs.length)
                const error = cbargs.shift();
                resolve([...cbargs, error])
            });

            fn(...args);
        });
    };
}