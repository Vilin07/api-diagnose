import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_503",

  matches(error) {
    return error.type === "http" && error.status === 503;
  },

  title: "503 Service Unavailable",

  description:
    "The server is temporarily unable to process the request.",

  causes: [
    "The server is under maintenance.",
    "The server is overloaded.",
    "A dependent service is unavailable."
  ],

  verify: [
    "Check the server status.",
    "Check system resources.",
    "Check maintenance announcements."
  ],

  solution: [
    "Wait and retry the request.",
    "Reduce server load.",
    "Restore the unavailable service."
  ]

});