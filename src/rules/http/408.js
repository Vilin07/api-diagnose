import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_408",

  matches(error) {
    return error.type === "http" && error.status === 408;
  },

  title: "408 Request Timeout",

  description:
    "The server timed out while waiting for the request.",

  causes: [
    "The request took too long to reach the server.",
    "The network connection is unstable.",
    "The request payload is too large."
  ],

  verify: [
    "Verify your internet connection.",
    "Verify the request timeout settings.",
    "Verify the request size."
  ],

  solution: [
    "Retry the request.",
    "Increase the timeout if appropriate.",
    "Reduce the request payload size."
  ]

});