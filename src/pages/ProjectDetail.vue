<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useScrollReveal } from '../composables/useScrollReveal'
import { projects } from '../data'
import FooterSection from '../components/FooterSection.vue'

const route = useRoute()
const router = useRouter()
const page = ref(null)
const loaded = ref(false)
const selectedScreenshot = ref(null)
const videoLoadErrors = ref({})

useScrollReveal(page)

const project = computed(() =>
  projects.find((p) => p.slug === route.params.slug)
)

const projectIndex = computed(() =>
  projects.findIndex((p) => p.slug === route.params.slug)
)

const projectScreenshots = computed(() => project.value?.screenshots ?? [])
const projectVideos = computed(() => project.value?.videos ?? [])

function goBack() {
  router.push({ name: 'accueil', hash: '#projets' })
}

function padNum(n) {
  return String(n + 1).padStart(2, '0')
}

function resolveMediaSrc(src) {
  if (!src) return ''
  if (/^(https?:|data:)/.test(src)) return src
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`
}

function openScreenshot(shot) {
  selectedScreenshot.value = shot
  document.body.style.overflow = 'hidden'
}

function closeScreenshot() {
  selectedScreenshot.value = null
  document.body.style.overflow = ''
}

function onVideoError(videoSrc) {
  videoLoadErrors.value = {
    ...videoLoadErrors.value,
    [videoSrc]: true,
  }
}

function onKeydown(event) {
  if (event.key === 'Escape' && selectedScreenshot.value) {
    closeScreenshot()
  }
}

onMounted(() => {
  setTimeout(() => { loaded.value = true }, 100)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div ref="page" class="min-h-screen bg-stone-50 dark:bg-[#0a0a0a]">
    <!-- Top bar -->
    <div class="fixed top-0 left-0 w-full z-50 bg-stone-50/90 dark:bg-[#0f0f0f]/90 backdrop-blur-lg border-b border-stone-200/60 dark:border-stone-800/60">
      <div class="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <button
          @click="goBack"
          class="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors group text-sm"
        >
          <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="font-medium">Retour</span>
        </button>
        <router-link :to="{ name: 'accueil' }" class="flex items-center gap-1.5">
          <span class="font-mono font-bold tracking-tight text-stone-900 dark:text-white">JMJ</span>
          <span class="w-2 h-2 rounded-full bg-amber-500"></span>
        </router-link>
      </div>
    </div>

    <!-- 404 -->
    <div v-if="!project" class="pt-32 text-center">
      <h1 class="text-4xl font-black text-stone-900 dark:text-white mb-4">Projet introuvable</h1>
      <p class="text-stone-500 dark:text-stone-400 mb-8">Ce projet n'existe pas ou a été supprimé.</p>
      <button @click="goBack" class="px-6 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors">
        Retour aux projets
      </button>
    </div>

    <!-- Project content -->
    <article v-else class="pt-24 pb-20">
      <!-- Hero section -->
      <div
        :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        class="transition-all duration-700 ease-out"
      >
        <div class="relative bg-stone-900 dark:bg-stone-950 overflow-hidden noise-bg">
          <!-- Subtle accent line -->
          <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>

          <div class="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
            <!-- Number + Category -->
            <div class="flex items-center gap-3 mb-6">
              <span class="font-mono text-amber-500 text-sm">{{ padNum(projectIndex) }}</span>
              <span class="w-8 h-[1px] bg-stone-700"></span>
              <span class="font-mono text-xs text-stone-500 uppercase tracking-wider">{{ project.category }}</span>
            </div>

            <h1 class="text-4xl md:text-5xl xl:text-6xl font-black text-white mb-6 leading-tight tracking-tight">{{ project.title }}</h1>
            <p class="text-base text-stone-400 max-w-2xl leading-relaxed">{{ project.description }}</p>

            <!-- Meta grid -->
            <div class="flex flex-wrap gap-8 mt-10 font-mono text-sm">
              <div>
                <p class="text-stone-500 text-xs uppercase tracking-wider mb-1">Date</p>
                <p class="text-stone-300">{{ project.date }}</p>
              </div>
              <div>
                <p class="text-stone-500 text-xs uppercase tracking-wider mb-1">Durée</p>
                <p class="text-stone-300">{{ project.duration }}</p>
              </div>
              <div>
                <p class="text-stone-500 text-xs uppercase tracking-wider mb-1">Équipe</p>
                <p class="text-stone-300">{{ project.team }}</p>
              </div>
              <div>
                <p class="text-stone-500 text-xs uppercase tracking-wider mb-1">Rôle</p>
                <p class="text-stone-300">{{ project.role }}</p>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-8">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-stone-400"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Main description -->
          <div class="lg:col-span-2 space-y-8">
            <div data-reveal="up">
              <h2 class="text-xl font-black text-stone-900 dark:text-white mb-6 tracking-tight transition-colors">Description du projet</h2>
              <div class="prose-content text-stone-600 dark:text-stone-400 leading-relaxed space-y-4 transition-colors">
                <p
                  v-for="(paragraph, idx) in project.longDescription.split('\n\n')"
                  :key="idx"
                  v-html="formatText(paragraph)"
                  class="text-[15px]"
                ></p>
              </div>
            </div>

            <div v-if="projectScreenshots.length" data-reveal="up" data-reveal-delay="200">
              <h2 class="text-xl font-black text-stone-900 dark:text-white mb-6 tracking-tight transition-colors">Captures d'écran</h2>
              <div class="grid sm:grid-cols-2 gap-4">
                <figure
                  v-for="(shot, i) in projectScreenshots"
                  :key="shot.src"
                  class="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 overflow-hidden"
                >
                  <button
                    type="button"
                    class="w-full text-left"
                    @click="openScreenshot(shot)"
                  >
                    <img
                      :src="resolveMediaSrc(shot.src)"
                      :alt="shot.alt"
                      loading="lazy"
                      class="w-full aspect-video object-cover cursor-zoom-in"
                      @error="(event) => { event.target.style.display = 'none' }"
                    />
                  </button>
                  <figcaption class="px-4 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 border-t border-stone-100 dark:border-stone-800">
                    {{ i + 1 }}. {{ shot.title }}
                  </figcaption>
                </figure>
              </div>
            </div>

            <div v-if="projectVideos.length" data-reveal="up" data-reveal-delay="250">
              <h2 class="text-xl font-black text-stone-900 dark:text-white mb-6 tracking-tight transition-colors">Vidéos de démonstration</h2>
              <div class="grid sm:grid-cols-2 gap-4">
                <figure
                  v-for="(video, i) in projectVideos"
                  :key="video.src"
                  class="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 overflow-hidden"
                >
                  <video
                    v-if="!videoLoadErrors[video.src]"
                    controls
                    preload="metadata"
                    playsinline
                    class="w-full aspect-video bg-black"
                    @error="onVideoError(video.src)"
                  >
                    <source :src="resolveMediaSrc(video.src)" type="video/mp4" />
                  </video>
                  <div
                    v-else
                    class="w-full aspect-video bg-black/90 text-stone-200 flex flex-col items-center justify-center px-4 text-center"
                  >
                    <p class="text-sm font-medium mb-2">Lecture impossible dans ce navigateur</p>
                    <a
                      :href="resolveMediaSrc(video.src)"
                      target="_blank"
                      rel="noreferrer"
                      class="text-xs text-amber-400 hover:text-amber-300 underline"
                    >
                      Ouvrir / télécharger la vidéo
                    </a>
                  </div>
                  <figcaption class="px-4 py-3 border-t border-stone-100 dark:border-stone-800">
                    <p class="text-sm font-medium text-stone-700 dark:text-stone-300">{{ i + 1 }}. {{ video.title }}</p>
                    <p class="text-xs text-stone-500 dark:text-stone-400 mt-1">{{ video.description }}</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Features -->
            <div data-reveal="right" data-reveal-delay="200" class="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-6 transition-colors">
              <h3 class="text-sm font-bold text-stone-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                <span class="text-amber-500 font-mono">→</span>
                Fonctionnalités
              </h3>
              <ul class="space-y-3">
                <li
                  v-for="(feat, i) in project.features"
                  :key="i"
                  data-reveal="left"
                  :data-reveal-delay="300 + i * 80"
                  class="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-400 transition-colors"
                >
                  <svg class="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ feat }}
                </li>
              </ul>
            </div>

            <!-- Challenges -->
            <div data-reveal="right" data-reveal-delay="400" class="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-6 transition-colors">
              <h3 class="text-sm font-bold text-stone-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                <span class="text-violet-500 font-mono">→</span>
                Défis rencontrés
              </h3>
              <ul class="space-y-3">
                <li
                  v-for="(ch, i) in project.challenges"
                  :key="i"
                  data-reveal="left"
                  :data-reveal-delay="500 + i * 80"
                  class="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-400 transition-colors"
                >
                  <svg class="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {{ ch }}
                </li>
              </ul>
            </div>

            <!-- Future improvements -->
            <div v-if="project.futureImprovements?.length" data-reveal="right" data-reveal-delay="450" class="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-6 transition-colors">
              <h3 class="text-sm font-bold text-stone-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                <span class="text-sky-500 font-mono">→</span>
                Améliorations futures
              </h3>
              <ul class="space-y-3">
                <li
                  v-for="(item, i) in project.futureImprovements"
                  :key="item"
                  data-reveal="left"
                  :data-reveal-delay="500 + i * 80"
                  class="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-400 transition-colors"
                >
                  <svg class="w-4 h-4 text-sky-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Tech stack -->
            <div data-reveal="right" data-reveal-delay="500" class="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-6 transition-colors">
              <h3 class="text-sm font-bold text-stone-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                <span class="text-amber-500 font-mono">→</span>
                Technologies
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2.5 py-1 bg-stone-100 dark:bg-stone-800 rounded text-[11px] font-mono font-medium text-stone-600 dark:text-stone-400 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation between projects -->
        <div data-reveal="up" data-reveal-delay="300" class="mt-20 pt-10 border-t border-stone-200 dark:border-stone-800">
          <h3 class="text-sm font-bold text-stone-900 dark:text-white mb-6 transition-colors">Autres projets</h3>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <router-link
              v-for="(p, idx) in projects.filter(p => p.slug !== project.slug)"
              :key="p.slug"
              :to="{ name: 'projet', params: { slug: p.slug } }"
              class="group flex items-center gap-4 p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-amber-500/40 transition-all"
            >
              <span class="font-mono text-xs text-amber-500">{{ padNum(projects.indexOf(p)) }}</span>
              <div class="min-w-0">
                <p class="text-sm font-bold text-stone-900 dark:text-white truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{{ p.title }}</p>
                <p class="text-xs font-mono text-stone-400 dark:text-stone-500">{{ p.category }}</p>
              </div>
              <svg class="w-4 h-4 text-stone-300 dark:text-stone-600 ml-auto shrink-0 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </article>

    <div
      v-if="selectedScreenshot"
      class="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
      @click.self="closeScreenshot"
    >
      <div class="relative w-full max-w-6xl bg-stone-950 border border-stone-800 rounded-xl overflow-hidden">
        <button
          type="button"
          @click="closeScreenshot"
          class="absolute top-3 right-3 z-10 w-9 h-9 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-colors flex items-center justify-center"
          aria-label="Fermer l'image"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img
          :src="resolveMediaSrc(selectedScreenshot.src)"
          :alt="selectedScreenshot.alt"
          class="w-full max-h-[75vh] object-contain bg-black"
        />

        <div class="px-5 py-4 border-t border-stone-800 bg-stone-950">
          <p class="text-base font-semibold text-white">{{ selectedScreenshot.title }}</p>
          <p class="text-sm text-stone-300 mt-1">
            {{ selectedScreenshot.description || selectedScreenshot.alt }}
          </p>
        </div>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script>
export default {
  methods: {
    formatText(text) {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-900 dark:text-white font-semibold">$1</strong>')
        .replace(/^- (.+)/gm, '<span class="flex items-start gap-2 mt-1"><span class="text-amber-500 mt-1">•</span><span>$1</span></span>')
    }
  }
}
</script>
