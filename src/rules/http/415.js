import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_415",

  matches(error) {
    return (
      error.type === "http" &&
      error.status === 415
    );
  },

  title: "415 Unsupported Media Type",

  description:
    "The server does not support the format of the request payload.",

  causes: [
    "The Content-Type header is incorrect.",
    "The uploaded file type is not supported.",
    "The request body format is not accepted by the server."
  ],

  verify: [
    "Check the Content-Type header.",
    "Check the API supported formats.",
    "Check the request payload format."
  ],

  solution: [
    "Use a supported Content-Type.",
    "Convert the payload to a supported format.",
    "Update the request headers correctly."
  ]

});