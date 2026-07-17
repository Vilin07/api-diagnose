import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_405",

  matches(error) {
    return error.type === "http" && error.status === 405;
  },

  title: "405 Method Not Allowed",

  description:
    "The endpoint exists, but the HTTP method is not supported.",

  causes: [
    "The endpoint accepts a different HTTP method.",
    "The frontend is using the wrong request method.",
    "The backend route is configured for another method."
  ],

  verify: [
    "Verify the request method.",
    "Verify the backend route definition.",
    "Verify the API documentation."
  ],

  solution: [
    "Use the correct HTTP method.",
    "Update the backend route if needed.",
    "Keep the frontend and backend API consistent."
  ]

});