import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_410",

  matches(error) {
    return (
      error.type === "http" &&
      error.status === 410
    );
  },

  title: "410 Gone",

  description:
    "The requested resource has been permanently removed from the server.",

  causes: [
    "The resource was intentionally deleted.",
    "The API endpoint has been removed.",
    "The requested content is no longer available."
  ],

  verify: [
    "Check if the endpoint has been removed.",
    "Check the latest API documentation.",
    "Check if the resource has been replaced."
  ],

  solution: [
    "Use the updated endpoint if available.",
    "Remove requests to the deleted resource.",
    "Update your application to use the supported API."
  ]

});