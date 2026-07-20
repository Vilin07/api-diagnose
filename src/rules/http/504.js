import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_504",

  matches(error) {
    return error.type === "http" && error.status === 504;
  },

  title: "504 Gateway Timeout",

  description:
    "The gateway did not receive a timely response from the upstream server.",

  causes: [
    "The upstream server is too slow.",
    "The backend service is not responding.",
    "A network timeout occurred."
  ],

  verify: [
    "Check the upstream server.",
    "Check network connectivity.",
    "Check timeout configuration."
  ],

  solution: [
    "Increase the timeout if appropriate.",
    "Optimize the backend service.",
    "Restore network connectivity."
  ]

});