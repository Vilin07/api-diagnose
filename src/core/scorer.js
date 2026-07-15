export function score(matches) {
    return matches.sort((a, b) => b.confidence - a.confidence);
}