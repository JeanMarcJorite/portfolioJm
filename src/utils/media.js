export function mediaUrl(src) {
  if (!src || /^(https?:|data:)/.test(src)) return src || "";
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
}
export const projectNumber = (index) => String(index + 1).padStart(2, "0");
