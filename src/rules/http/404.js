import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_404",

  matches(error) {
    return error.type === "http" &&
           error.status === 404;
  },

  title: "404 Not Found",

  description:
    "The requested endpoint does not exist.",

  causes: [
    "The endpoint URL is incorrect.",
    "The route is not registered.",
    "The HTTP method does not match."
  ],

  verify: [
    "Verify the request URL.",
    "Verify the backend route.",
    "Verify the HTTP method."
  ],

  solution: [
    "Correct the endpoint URL.",
    "Register the missing route.",
    "Use the correct HTTP method."
  ]

});