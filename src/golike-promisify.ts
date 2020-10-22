import fs from "fs";

type GetArgs<TFunc extends Function> = TFunc extends (...args: infer TArgs) => any ? TArgs : never;
type GetArgsExceptCallback<TFunc extends Function> = Exclude<GetArgs<TFunc>, Function>;

export function promisify<TFunc extends Function>(fn: TFunc): (...args: GetArgsExceptCallback<TFunc>) => Promise<[any, Error]> {
	return (...args: GetArgsExceptCallback<TFunc>) => new Promise(() => {
		for (let i = args.length - 1; i >= 0; i--) {
			if (typeof args[i] === "function") {
				//
			}
		}

		fn(...args);
	});
}

async function test() {
	const goReadFile = promisify(fs.readFile);

	let err: Error;

	let data1;
	let data2;
	[data1, err] = await goReadFile("some stuff");
	[data1, err] = await goReadFile("some stuff");
}