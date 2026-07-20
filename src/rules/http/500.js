import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_500",

  matches(error) {
    return error.type === "http" && error.status === 500;
  },

  title: "500 Internal Server Error",

  description:
    "The server encountered an unexpected error while processing the request.",

  causes: [
    "An unhandled exception occurred.",
    "The server application crashed.",
    "A database or external service failed."
  ],

  verify: [
    "Check the server logs.",
    "Check the application stack trace.",
    "Check database and external service connections."
  ],

  solution: [
    "Fix the server-side error.",
    "Handle exceptions properly.",
    "Restart the affected service if necessary."
  ]

});