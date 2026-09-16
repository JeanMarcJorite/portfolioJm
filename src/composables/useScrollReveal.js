import { onMounted, onUnmounted } from "vue";
export function useScrollReveal(containerRef) {
  let observer;
  let frame = 0;
  let motion;
  const pending = new Set();
  const reveal = (element) => {
    element.classList.remove("reveal-pending");
    pending.delete(element);
    observer?.unobserve(element);
  };
  const check = () => {
    frame = 0;
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    for (const element of pending) {
      if (atBottom || element.getBoundingClientRect().top <= window.innerHeight * 0.9) reveal(element);
    }
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(check); };
  const onPreference = () => {
    if (motion.matches) { pending.forEach(reveal); observer?.disconnect(); }
  };
  onMounted(() => {
    const root = containerRef?.value;
    if (!root) return;
    motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) schedule();
    }, { threshold: 0 });
    const elements = root.querySelectorAll("[data-reveal], .section-label, .section-heading, .contact-body, .contact-email, .contact-links, .footer-top, .footer-bottom, .detail-story, .other-projects > a");
    elements.forEach((element) => {
      if (element.parentElement.closest("[data-reveal]")) return;
      element.setAttribute("data-reveal", "");
      const siblings = [...element.parentElement.children].filter((item) => item.matches("[data-reveal]"));
      element.dataset.stagger = String(Math.min(Math.max(0, siblings.indexOf(element)), 3));
      if (element.getBoundingClientRect().top <= window.innerHeight * 0.9) return;
      element.classList.add("reveal-pending");
      pending.add(element);
      observer.observe(element);
    });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", onPreference);
  });
  onUnmounted(() => {
    observer?.disconnect();
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    motion?.removeEventListener("change", onPreference);
    pending.clear();
  });
}
