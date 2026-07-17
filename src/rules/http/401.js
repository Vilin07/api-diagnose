import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_401",

  matches(error) {
    return error.type === "http" && error.status === 401;
  },

  title: "401 Unauthorized",

  description:
    "Authentication is required or the provided credentials are invalid.",

  causes: [
    "Authentication token is missing.",
    "Authentication token has expired.",
    "Authentication token is invalid.",
    "The request is blocked by authentication middleware."
  ],

  verify: [
    "Verify the Authorization header.",
    "Verify the JWT token.",
    "Verify the authentication middleware."
  ],

  solution: [
    "Send a valid authentication token.",
    "Log in again to obtain a new token.",
    "Configure the authentication middleware correctly."
  ]

});