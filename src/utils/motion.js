// Restored positions and direct anchors stay immediately readable.
export function shouldAnimateEntrance() {
  const navigation = performance.getEntriesByType("navigation")[0];
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    navigation?.type !== "back_forward" && window.scrollY < 2 &&
    !window.location.hash.slice(1).includes("#");
}
