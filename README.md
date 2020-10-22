# golike-promisify
Provides function transformations for callback-based functions sort of in the style of Go, using array destructuring.

## Why return error-first tuples?
In error-first callbacks, the values after the error are undefined and can't be grabbed with varargs, so we don't know jow many values to backfill the tuple with to get an error-last result.

## Installation
`npm install golike-promisify`

## Example

```js
import fs from "fs";
import * as golp from "../golike-promisify";
const readFile = golp.promisify(fs.readFile);

(async () => {
    const [err, data] = await readFile("blah.js");
    if (err) {
        console.log(err);
    }
})();
```
