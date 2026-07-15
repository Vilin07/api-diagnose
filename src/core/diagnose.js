import { normalize } from "./normalize.js";
import { registry } from "./registry.js";
import { score } from "./scorer.js";
import { formatReport } from "./formatter.js";

export function diagnose(error) {

    const normalized = normalize(error);

    const matches = registry.filter(rule =>
        rule.matches(normalized)
    );

    if (matches.length === 0) {

        return formatReport({
            id: "UNKNOWN_ERROR",
            title: "Unknown Error",
            meaning: "No diagnosis available.",
            causes: [
                "No matching knowledge pack."
            ],
            fixes: [
                "Check the original error."
            ],
            confidence: 0
        });

    }

    const ranked = score(matches);

    return formatReport(ranked[0]);

}