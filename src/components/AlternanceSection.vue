<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { alternanceSection } from '../data'

const section = ref(null)
const selectedImage = ref(null)
useScrollReveal(section)

function resolveMediaSrc(src) {
  if (!src) return ''
  if (/^(https?:|data:)/.test(src)) return src
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`
}

function openImage(calendar) {
  selectedImage.value = calendar
  document.body.style.overflow = 'hidden'
}

function closeImage() {
  selectedImage.value = null
  document.body.style.overflow = ''
}

function onKeydown(event) {
  if (event.key === 'Escape' && selectedImage.value) {
    closeImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="alternance" ref="section" class="py-28 bg-white dark:bg-[#0f0f0f] transition-colors duration-300 relative overflow-hidden noise-bg">
    <div class="absolute -right-10 top-10 text-[18rem] font-black text-stone-900 dark:text-white opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none leading-none font-mono">
      06
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <div data-reveal="left" class="mb-12">
        <div class="section-num mb-4"><span>06 — Alternance</span></div>
        <h2 class="text-3xl md:text-4xl font-black tracking-tight text-stone-900 dark:text-white transition-colors">
          {{ alternanceSection.title }}
        </h2>
        <p class="mt-4 text-stone-600 dark:text-stone-400 max-w-3xl leading-relaxed">
          {{ alternanceSection.description }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <article
          v-for="(calendar, i) in alternanceSection.calendars"
          :key="calendar.src"
          data-reveal="up"
          :data-reveal-delay="200 + i * 100"
          class="rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 overflow-hidden"
        >
          <button type="button" class="w-full text-left" @click="openImage(calendar)">
            <img
              :src="resolveMediaSrc(calendar.src)"
              :alt="calendar.alt"
              loading="lazy"
              class="w-full aspect-[16/10] object-cover cursor-zoom-in"
              @error="(event) => { event.target.style.display = 'none' }"
            />
          </button>
          <div class="px-4 py-3 border-t border-stone-200 dark:border-stone-800">
            <p class="text-sm font-semibold text-stone-900 dark:text-white">{{ calendar.title }}</p>
          </div>
        </article>
      </div>
    </div>

    <div
      v-if="selectedImage"
      class="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
      @click.self="closeImage"
    >
      <div class="relative w-full max-w-6xl bg-stone-950 border border-stone-800 rounded-xl overflow-hidden">
        <button
          type="button"
          @click="closeImage"
          class="absolute top-3 right-3 z-10 w-9 h-9 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors flex items-center justify-center"
          aria-label="Fermer l'image"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img :src="resolveMediaSrc(selectedImage.src)" :alt="selectedImage.alt" class="w-full max-h-[80vh] object-contain bg-black" />
        <div class="px-5 py-4 border-t border-stone-800 bg-stone-950">
          <p class="text-sm font-semibold text-white">{{ selectedImage.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
