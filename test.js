import { diagnose } from "./src/index.js";

const tests = [
  { type: "http", status: 400 },
  { type: "http", status: 401 },
  { type: "http", status: 403 },
  { type: "http", status: 404 },
  { type: "http", status: 405 },
  { type: "http", status: 408 }
];

for (const test of tests) {
  console.log("================================");
  console.log(diagnose(test));
}