import fs from "fs";

const wasmFile = fs.readFileSync(
	"target/wasm32-unknown-unknown/release/deps/webrust.wasm",
);
// const wasmRes = await fetch(
// 	"/target/wasm32-unknown-unknown/release/deps/webrust.wasm",
// );
const wasmSrc = await WebAssembly.instantiate(new Uint8Array(wasmFile), {});
// const wasmSrc = await WebAssembly.instantiate(await wasmRes.arrayBuffer(), {});
console.log("DAFFASD");
const ws = wasmSrc.instance.exports;
const wmem = ws.memory;

const sz = 1024 ** 2 * 1600;
const dataPtr = ws.alloc(sz);
const sampleData = new Uint8Array(wmem.buffer, dataPtr, sz);
const sampleData2 = new Uint8Array(sz);

for (let i = 0; i < sz; i++) sampleData[i] = sampleData2[i] = 0;

const rptr = ws.alloc(ws.neededSize(sz, true));

// const start = performance.now();
// for (let i = 0; i < 1; i++) {
// 	const rlen = ws.toBase64(dataPtr, sz, rptr, true);
// }
// const end = performance.now();
// console.log(`소요 시간1: ${end - start}ms`);

const start = performance.now();
let res;
for (let i = 0; i < 1; i++) {
	res = sampleData2.toBase64();
}
console.log(res[10]);
const end = performance.now();
console.log(`소요 시간2: ${end - start}ms`);

// console.log(rlen);
// console.log(ws.neededSize(sz, true));

// const rs = textDecoder.decode(result);

// for (let i = 0; i < 10; i++) {
// 	console.log(rs[i]);
// }

// const ptr = ws.walloc(1024);
// console.log(ptr);
// const buf = ws.memory.buffer;
// const arr = new Uint8Array(buf, ptr, 1024);

// console.log(arr);

// for (let i = 0; i < 10000; i++) {
// 	ws.dealloc(ws.alloc(1024), 1024);
// 	// ws.alloc(1024);
// }

// console.log(ws.memory.buffer.byteLength / 65536);
// console.log(ws.needed_size(11));

// console.log(new Uint8Array([1, 2, 4, 5, 6]).toBase64());
