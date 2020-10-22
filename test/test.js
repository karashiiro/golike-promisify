import should from "should";
import fs from "fs";

import * as golp from "../golike-promisify";

describe("golike-promisify", function() {
    it("should return the thing.", async function() {
        const fn = golp.promisify(fs.readFile);
        const [err, data] = await fn("blah.js");
        should.notEqual(err, undefined);
        should.equal(data, undefined);
    })
})