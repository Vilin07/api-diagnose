import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_501",

  matches(error) {
    return error.type === "http" && error.status === 501;
  },

  title: "501 Not Implemented",

  description:
    "The server does not support the requested functionality.",

  causes: [
    "The endpoint is not implemented.",
    "The HTTP method is unsupported.",
    "The feature is still under development."
  ],

  verify: [
    "Check the API documentation.",
    "Check the backend implementation.",
    "Check the supported HTTP methods."
  ],

  solution: [
    "Implement the missing feature.",
    "Use a supported endpoint.",
    "Use a supported HTTP method."
  ]

});