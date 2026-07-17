export function score(matches) {
    if (!matches || matches.length === 0) {
        return [];
    }

    return matches.sort(
        (a, b) => b.confidence - a.confidence
    );
}