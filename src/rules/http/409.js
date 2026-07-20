import { createRule } from "../../core/createRule.js";

export default createRule({

  id: "HTTP_409",

  matches(error) {
    return (
      error.type === "http" &&
      error.status === 409
    );
  },

  title: "409 Conflict",

  description:
    "The request conflicts with the current state of the resource.",

  causes: [
    "The resource already exists.",
    "A duplicate entry was submitted.",
    "Another request modified the resource.",
    "The request violates a uniqueness constraint."
  ],

  verify: [
    "Verify if the resource already exists.",
    "Verify unique fields such as email or username.",
    "Verify concurrent updates.",
    "Verify database constraints."
  ],

  solution: [
    "Use a unique value.",
    "Update the existing resource instead of creating a new one.",
    "Handle duplicate requests gracefully."
  ]

});