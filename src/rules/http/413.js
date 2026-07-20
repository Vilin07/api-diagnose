import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_413",

  matches(error) {
    return (
      error.type === "http" &&
      error.status === 413
    );
  },

  title: "413 Payload Too Large",

  description:
    "The request payload exceeds the maximum size allowed by the server.",

  causes: [
    "The uploaded file is too large.",
    "The request body exceeds the server limit.",
    "The API has a payload size restriction."
  ],

  verify: [
    "Check the size of the request body.",
    "Check the server's upload size limit.",
    "Check the request size configured in the backend."
  ],

  solution: [
    "Reduce the payload size.",
    "Compress or split large files.",
    "Increase the server's request size limit if appropriate."
  ]

});