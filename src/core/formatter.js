export function formatReport(rule) {
  return {
    id: rule.id,
    title: rule.title,
    description: rule.description,
    causes: rule.causes,
    verify: rule.verify,
    solution: rule.solution
  };
}