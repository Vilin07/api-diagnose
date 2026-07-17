import assert from "node:assert";
import { diagnose } from "../src/index.js";

const report = diagnose({
  type: "http",
  status: 404
});

assert.strictEqual(report.id, "HTTP_404");
assert.strictEqual(report.title, "404 Not Found");

console.log("✅ HTTP 404 test passed");