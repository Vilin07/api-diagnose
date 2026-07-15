import axios from "axios";
import { diagnose } from "../src/index.js";

try {
  await axios.get("https://jsonplaceholder.typicode.com/invalid-url");
} catch (error) {
  const report = diagnose(error);
  console.log(report);
}