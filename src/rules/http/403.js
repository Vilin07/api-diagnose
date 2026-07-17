import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_403",

  matches(error) {
    return error.type === "http" && error.status === 403;
  },

  title: "403 Forbidden",

  description:
    "The server understood the request but refuses to authorize it.",

  causes: [
    "The authenticated user does not have permission.",
    "The endpoint requires a different user role.",
    "The server blocks access to the requested resource."
  ],

  verify: [
    "Verify the user's permissions.",
    "Verify the user's role.",
    "Verify the backend authorization middleware."
  ],

  solution: [
    "Grant the required permissions.",
    "Use an account with the required access.",
    "Update the authorization rules if necessary."
  ]

});