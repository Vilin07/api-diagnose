import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_422",

  matches(error) {
    return (
      error.type === "http" &&
      error.status === 422
    );
  },

  title: "422 Unprocessable Entity",

  description:
    "The request is valid, but one or more input values failed validation.",

  causes: [
    "Required fields are missing.",
    "Input values do not meet validation rules.",
    "The submitted data is invalid."
  ],

  verify: [
    "Check the request body.",
    "Check the validation rules.",
    "Check the server response for validation errors."
  ],

  solution: [
    "Provide valid input values.",
    "Send all required fields.",
    "Match the API validation requirements."
  ]

});