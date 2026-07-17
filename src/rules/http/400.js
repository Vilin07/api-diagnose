import { createRule } from "../../core/createRule.js";

export default createRule({
  id: "HTTP_400",

  matches(error) {
    return error.type === "http" && error.status === 400;
  },

  title: "400 Bad Request",

  description: "The server could not understand the request.",

  causes: [
    "Invalid request body",
    "Missing required fields",
    "Incorrect query parameters",
    "Invalid JSON format"
  ],

  verify: [
    "Verify the request body.",
    "Verify the query parameters.",
    "Verify the request headers.",
    "Verify the JSON format."
  ],

  solution: [
    "Validate the request data.",
    "Send all required fields.",
    "Correct the JSON syntax."
  ]
});