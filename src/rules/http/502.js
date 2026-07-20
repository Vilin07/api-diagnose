import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_502",

  matches(error) {
    return error.type === "http" && error.status === 502;
  },

  title: "502 Bad Gateway",

  description:
    "The server received an invalid response from an upstream server.",

  causes: [
    "The backend service is unavailable.",
    "The reverse proxy cannot reach the application.",
    "An upstream server returned an invalid response."
  ],

  verify: [
    "Check the backend service status.",
    "Check the proxy or gateway configuration.",
    "Check the upstream server logs."
  ],

  solution: [
    "Restart the backend service.",
    "Fix the proxy configuration.",
    "Resolve upstream server issues."
  ]

});