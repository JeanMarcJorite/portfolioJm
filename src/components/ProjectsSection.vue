<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useScrollReveal } from '../composables/useScrollReveal'
import { projects } from '../data'

const section = ref(null)
useScrollReveal(section)

const router = useRouter()

const current = ref(0)
const total = computed(() => projects.length)
const isDragging = ref(false)
const dragStartX = ref(0)
const dragOffset = ref(0)

function next() {
  current.value = (current.value + 1) % total.value
}
function prev() {
  current.value = (current.value - 1 + total.value) % total.value
}
function goTo(i) {
  current.value = i
}

function openProject(slug) {
  router.push({ name: 'projet', params: { slug } })
}

function onPointerDown(e) {
  isDragging.value = true
  dragStartX.value = e.clientX || e.touches?.[0]?.clientX || 0
  dragOffset.value = 0
}
function onPointerMove(e) {
  if (!isDragging.value) return
  const x = e.clientX || e.touches?.[0]?.clientX || 0
  dragOffset.value = x - dragStartX.value
}
function onPointerUp() {
  if (!isDragging.value) return
  isDragging.value = false
  if (dragOffset.value < -60) next()
  else if (dragOffset.value > 60) prev()
  dragOffset.value = 0
}

function padNum(n) {
  return String(n + 1).padStart(2, '0')
}

</script>

<template>
  <section id="projets" ref="section" class="py-28 bg-stone-50 dark:bg-[#0a0a0a] transition-colors duration-300 relative noise-bg">
    <!-- Large faded number -->
    <div class="absolute -left-10 top-20 text-[18rem] font-black text-stone-900 dark:text-white opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none leading-none font-mono">
      04
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <!-- Header with navigation -->
      <div data-reveal="left" class="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <div class="section-num mb-4"><span>04 — Projets</span></div>
          <h2 class="text-3xl md:text-4xl font-black tracking-tight text-stone-900 dark:text-white transition-colors">
            Réalisations récentes
          </h2>
        </div>
        <!-- Navigation -->
        <div class="flex items-center gap-4">
          <span class="font-mono text-sm text-stone-400 dark:text-stone-500 tabular-nums">
            {{ padNum(current) }} / {{ padNum(total - 1) }}
          </span>
          <div class="flex gap-2">
            <button
              @click="prev"
              class="w-10 h-10 rounded-lg border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:border-amber-500 hover:text-amber-500 transition-all active:scale-95"
              aria-label="Projet précédent"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              @click="next"
              class="w-10 h-10 rounded-lg border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:border-amber-500 hover:text-amber-500 transition-all active:scale-95"
              aria-label="Projet suivant"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Carousel -->
      <div
        data-reveal="up"
        data-reveal-delay="200"
        class="relative overflow-hidden rounded-xl select-none"
        @mousedown.prevent="onPointerDown"
        @mousemove="onPointerMove"
        @mouseup="onPointerUp"
        @mouseleave="onPointerUp"
        @touchstart="onPointerDown"
        @touchmove="onPointerMove"
        @touchend="onPointerUp"
      >
        <div
          class="flex transition-transform duration-500 ease-out"
          :class="{ '!duration-0': isDragging }"
          :style="{ transform: `translateX(calc(-${current * 100}% + ${isDragging ? dragOffset : 0}px))` }"
        >
          <router-link
            v-for="(project, i) in projects"
            :key="project.slug"
            :to="{ name: 'projet', params: { slug: project.slug } }"
            class="w-full shrink-0 block group"
          >
            <div class="grid md:grid-cols-2 bg-white dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-stone-400 dark:group-hover:border-stone-600">
              <!-- Image / placeholder -->
              <div class="aspect-video md:aspect-auto md:min-h-[400px] bg-stone-100 dark:bg-stone-800/50 overflow-hidden relative">
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.title"
                  class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div
                  v-else
                  class="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-700"
                >
                  <div class="text-center px-8">
                    <!-- Large project number -->
                    <span class="block font-mono text-8xl font-black text-stone-200 dark:text-stone-700/50 mb-4">{{ padNum(i) }}</span>
                    <span class="text-sm font-mono text-stone-400 dark:text-stone-500 tracking-wider uppercase">{{ project.category }}</span>
                  </div>
                </div>
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Content -->
              <div class="p-8 md:p-10 flex flex-col justify-center">
                <div class="flex items-center gap-3 mb-4">
                  <span class="font-mono text-xs text-amber-500 tracking-wider">{{ padNum(i) }}</span>
                  <span class="w-8 h-[1px] bg-stone-300 dark:bg-stone-700"></span>
                  <span class="font-mono text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider">{{ project.category }}</span>
                </div>

                <h3 class="text-2xl md:text-3xl font-black text-stone-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 leading-tight tracking-tight">
                  {{ project.title }}
                </h3>

                <p class="text-stone-600 dark:text-stone-400 mb-6 leading-relaxed text-sm">{{ project.description }}</p>

                <!-- Meta row -->
                <div v-if="project.date || project.team" class="flex flex-wrap gap-4 mb-6 text-xs font-mono text-stone-400 dark:text-stone-500">
                  <span v-if="project.date" class="flex items-center gap-1.5">
                    <span class="text-amber-500">→</span> {{ project.date }}
                  </span>
                  <span v-if="project.team" class="flex items-center gap-1.5">
                    <span class="text-amber-500">→</span> {{ project.team }}
                  </span>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5 mb-6">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 rounded text-[11px] font-mono font-medium text-stone-500 dark:text-stone-400 transition-colors"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- CTA -->
                <span class="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Voir le détail</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Dots -->
      <div data-reveal="fade" data-reveal-delay="400" class="flex items-center justify-center gap-2 mt-8">
        <button
          v-for="(_, i) in projects"
          :key="i"
          @click="goTo(i)"
          :class="i === current ? 'w-8 bg-amber-500' : 'w-2.5 bg-stone-300 dark:bg-stone-600 hover:bg-amber-500/50'"
          class="h-2 rounded-full transition-all duration-300"
          :aria-label="`Projet ${i + 1}`"
        />
      </div>
    </div>
  </section>
</template>
