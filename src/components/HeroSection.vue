<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loaded = ref(false)
const typedText = ref('')
const showCursor = ref(true)
const fullText = 'Développeur Web FullStack'

function goToProjects() {
  router.push({ name: 'accueil', hash: '#projets' })
}

onMounted(() => {
  setTimeout(() => { loaded.value = true }, 100)
  // Typing effect
  let i = 0
  const interval = setInterval(() => {
    if (i < fullText.length) {
      typedText.value += fullText[i]
      i++
    } else {
      clearInterval(interval)
    }
  }, 60)
})
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
      <div class="grid lg:grid-cols-12 gap-10 items-end py-16 md:py-20">
        <div class="lg:col-span-8">
          <div :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" class="transition-all duration-700">
            <div class="section-num mb-6"><span>01 — Portfolio</span></div>
            <h1 class="text-4xl sm:text-5xl md:text-7xl xl:text-8xl leading-[0.95] sm:leading-[0.9] tracking-tight font-bold text-slate-900 dark:text-white">
              Jean-Marc
              <br />
              Jorite
            </h1>
          </div>

          <div :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'" class="transition-all duration-700 delay-150 mt-6">
            <p class="font-mono text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 tracking-normal sm:tracking-wide">
              {{ typedText }}<span class="terminal-cursor"></span>
            </p>
          </div>

          <p :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            class="max-w-2xl mt-8 text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed transition-all duration-700 delay-300">
            Actuellement en recherche active d'une alternance pour intégrer un master MIAGE dès septembre 2026.
            J'aide à transformer des idées en produits web utiles, propres et lisibles.
          </p>

          <div :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'" class="mt-10 flex flex-wrap gap-3 transition-all duration-700 delay-500">
            <button @click="goToProjects" type="button"
              class="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-md text-xs sm:text-sm font-semibold tracking-wide sm:tracking-wider">
              Voir mes projets
            </button>
            <a href="https://github.com/JeanMarcJorite" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-slate-900/20 dark:border-white/20 text-slate-800 dark:text-slate-200 rounded-md text-xs sm:text-sm font-semibold tracking-wide sm:tracking-wider hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors">
              GitHub
            </a>
          </div>
        </div>

        <div class="lg:col-span-4">
          <div :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" class="transition-all duration-700 delay-400">
            <div class="border border-slate-900/15 dark:border-white/15 bg-white/75 dark:bg-black/60 backdrop-blur-md p-6">
              <div class="font-mono text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-5">Identity</div>
              <div class="space-y-4 text-sm">
                <div class="pb-3 border-b border-slate-900/10 dark:border-white/10">
                  <p class="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Role</p>
                  <p class="mt-1 font-semibold text-slate-900 dark:text-white">Développeur Web FullStack</p>
                </div>
                <div class="pb-3 border-b border-slate-900/10 dark:border-white/10">
                  <p class="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Formation</p>
                  <p class="mt-1 font-semibold text-slate-900 dark:text-white">Licence MIAGE - Orléans</p>
                </div>
                <div>
                  <p class="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</p>
                  <p class="mt-1 font-semibold text-orange-600 dark:text-orange-400">Recherche d'Alternance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
