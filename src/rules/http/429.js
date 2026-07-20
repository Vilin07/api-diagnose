import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_429",

  matches(error) {
    return (
      error.type === "http" &&
      error.status === 429
    );
  },

  title: "429 Too Many Requests",

  description:
    "The request was rejected because the rate limit has been exceeded.",

  causes: [
    "Too many requests were sent in a short time.",
    "The API rate limit has been reached.",
    "The application is making repeated requests."
  ],

  verify: [
    "Check the API rate limits.",
    "Check the Retry-After response header.",
    "Check how frequently requests are sent."
  ],

  solution: [
    "Reduce the request frequency.",
    "Retry after the recommended delay.",
    "Implement request throttling or caching."
  ]

});