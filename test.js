import { diagnose } from "./src/index.js";

const report = diagnose({
    status: 404
});

console.log(report);