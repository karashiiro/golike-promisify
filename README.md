# golike-promisify
Provides function transformations for callback-based functions sort of in the style of Go, using array destructuring.

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
