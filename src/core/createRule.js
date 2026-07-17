const REQUIRED_FIELDS = [
  "id",
  "matches",
  "title",
  "description",
  "causes",
  "verify",
  "solution"
];

export function createRule(rule) {
  for (const field of REQUIRED_FIELDS) {
    if (!(field in rule)) {
      throw new Error(
        `Rule "${rule.id || "UNKNOWN"}" is missing "${field}"`
      );
    }
  }

  return Object.freeze(rule);
}