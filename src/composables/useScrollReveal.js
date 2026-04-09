import { onMounted, onUnmounted } from 'vue'

/**
 * Composable that observes elements with [data-reveal] inside a container
 * and adds `.revealed` class when they enter the viewport.
 * 
 * Usage: useScrollReveal(containerRef)
 * In template: <div data-reveal> or <div data-reveal="delay-200">
 */
export function useScrollReveal(containerRef) {
  let observer = null
  const timers = new Map()

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target

          if (entry.isIntersecting) {
            // Add revealed class after optional delay
            const delay = el.dataset.revealDelay
            if (delay) {
              const id = setTimeout(() => {
                el.classList.add('revealed')
                timers.delete(el)
                observer?.unobserve(el)
              }, parseInt(delay))
              timers.set(el, id)
            } else {
              el.classList.add('revealed')
              observer?.unobserve(el)
            }
          } else {
            // If element leaves before its delayed reveal, cancel pending timer.
            // Do not remove `revealed`: animations should run only once.
            if (timers.has(el)) {
              clearTimeout(timers.get(el))
              timers.delete(el)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '-40px 0px' }
    )

    // Observe all [data-reveal] elements inside the container (or document)
    const root = containerRef?.value || document
    const elements = root.querySelectorAll('[data-reveal]')
    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    timers.forEach((id) => clearTimeout(id))
    timers.clear()
    if (observer) observer.disconnect()
  })
}
