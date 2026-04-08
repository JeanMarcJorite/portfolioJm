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
  <section class="relative min-h-screen flex items-center overflow-hidden noise-bg">
    <!-- Subtle grain bg -->
    <div class="absolute inset-0 bg-stone-50 dark:bg-[#0a0a0a] -z-20 transition-colors duration-500"></div>

    <!-- Large faded number background decoration -->
    <div :class="loaded ? 'opacity-[0.03] dark:opacity-[0.04]' : 'opacity-0'"
      class="absolute -right-20 top-1/2 -translate-y-1/2 text-[25rem] font-black text-stone-900 dark:text-white select-none pointer-events-none transition-opacity duration-[2s] leading-none font-mono">
      01
    </div>

    <!-- Diagonal accent line -->
    <div :class="loaded ? 'scale-x-100' : 'scale-x-0'"
      class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent origin-left transition-transform duration-[1.5s] ease-out delay-500"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 w-full">
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-screen py-24">

        <!-- Left: Main content -->
        <div class="lg:col-span-7 relative z-10">
          <!-- Section tag -->
          <div :class="loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
            class="section-num mb-8 transition-all duration-700 ease-out">
            <span>01 — Introduction</span>
          </div>

          <!-- Status badge -->
          <div :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 mb-8 transition-all duration-700 ease-out delay-100">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span class="text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium tracking-wider uppercase">Open to work</span>
          </div>

          <!-- Name -->
          <h1 :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            class="transition-all duration-700 ease-out delay-200">
            <span class="block text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter text-stone-900 dark:text-white leading-[0.9]">
              Jean-Marc
            </span>
            <span class="block text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter text-stone-900 dark:text-white leading-[0.9] mt-1">
              Jorite<span class="text-amber-500">.</span>
            </span>
          </h1>

          <!-- Terminal-style subtitle -->
          <div :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            class="mt-6 font-mono text-base md:text-lg text-stone-500 dark:text-stone-400 transition-all duration-700 ease-out delay-[400ms]">
            <span class="text-amber-500">→</span> {{ typedText }}<span class="terminal-cursor"></span>
          </div>

          <!-- Description -->
          <p :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            class="max-w-lg text-base text-stone-600 dark:text-stone-400 mt-6 leading-relaxed transition-all duration-700 ease-out delay-[550ms]">
            <span class="font-semibold text-stone-900 dark:text-white">Actuellement en recherche active d’une alternance</span>
            pour intégrer un master MIAGE dès septembre 2026.
            Étudiant en licence MIAGE à l’Université d’Orléans, je conçois des interfaces web modernes, performantes et accessibles.
          </p>

          <!-- CTA row -->
          <div :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            class="flex gap-4 mt-10 flex-wrap transition-all duration-700 ease-out delay-[700ms]">
            <button @click="goToProjects" type="button"
              class="magnetic-btn group inline-flex items-center gap-3 px-7 py-3.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-medium rounded-lg hover:bg-stone-800 dark:hover:bg-stone-100 transition-all text-sm">
              Voir mes projets
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a href="https://github.com/JeanMarcJorite" target="_blank"
              class="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-medium rounded-lg hover:border-stone-900 dark:hover:border-white transition-all text-sm">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Right: Code card visual -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div :class="loaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-2'"
            class="w-full max-w-md transition-all duration-1000 ease-out delay-[600ms]">
            <!-- Terminal window -->
            <div class="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/80 backdrop-blur-sm shadow-2xl shadow-stone-900/5 dark:shadow-black/20 overflow-hidden">
              <!-- Title bar -->
              <div class="flex items-center gap-2 px-4 py-3 border-b border-stone-100 dark:border-stone-800">
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-400/80"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                </div>
                <span class="text-xs font-mono text-stone-400 dark:text-stone-500 ml-2">about-me.js</span>
              </div>
              <!-- Code content  -->
              <div class="p-5 font-mono text-sm leading-relaxed">
                <div class="flex">
                  <span class="text-stone-300 dark:text-stone-600 select-none w-8 text-right mr-4">1</span>
                  <span><span class="text-violet-500">const</span> <span class="text-amber-600 dark:text-amber-400">dev</span> <span class="text-stone-400">=</span> <span class="text-stone-500">{</span></span>
                </div>
                <div class="flex">
                  <span class="text-stone-300 dark:text-stone-600 select-none w-8 text-right mr-4">2</span>
                  <span>&nbsp;&nbsp;<span class="text-emerald-600 dark:text-emerald-400">nom</span><span class="text-stone-400">:</span> <span class="text-amber-700 dark:text-amber-300">"Jean-Marc Jorite"</span><span class="text-stone-400">,</span></span>
                </div>
                <div class="flex">
                  <span class="text-stone-300 dark:text-stone-600 select-none w-8 text-right mr-4">3</span>
                  <span>&nbsp;&nbsp;<span class="text-emerald-600 dark:text-emerald-400">rôle</span><span class="text-stone-400">:</span> <span class="text-amber-700 dark:text-amber-300">"Developpeur Fullstack"</span><span class="text-stone-400">,</span></span>
                </div>
                <div class="flex">
                  <span class="text-stone-300 dark:text-stone-600 select-none w-8 text-right mr-4">4</span>
                  <span>&nbsp;&nbsp;<span class="text-emerald-600 dark:text-emerald-400">lieu</span><span class="text-stone-400">:</span> <span class="text-amber-700 dark:text-amber-300">"Orléans, FR"</span><span class="text-stone-400">,</span></span>
                </div>
                <div class="flex">
                  <span class="text-stone-300 dark:text-stone-600 select-none w-8 text-right mr-4">5</span>
                  <span>&nbsp;&nbsp;<span class="text-emerald-600 dark:text-emerald-400">stack</span><span class="text-stone-400">:</span> <span class="text-stone-500">[</span></span>
                </div>
                <div class="flex">
                  <span class="text-stone-300 dark:text-stone-600 select-none w-8 text-right mr-4">6</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-700 dark:text-amber-300">"Java"</span><span class="text-stone-400">,</span> <span class="text-amber-700 dark:text-amber-300">"Spring"</span><span class="text-stone-400">,</span> <span class="text-amber-700 dark:text-amber-300">"Vue.js"</span><span class="text-stone-400">,</span></span>
                </div>
                <div class="flex">
                  <span class="text-stone-300 dark:text-stone-600 select-none w-8 text-right mr-4">7</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-amber-700 dark:text-amber-300">"TypeScript"</span><span class="text-stone-400">,</span> <span class="text-amber-700 dark:text-amber-300">"PostgreSQL"</span></span>
                </div>
                <div class="flex">
                  <span class="text-stone-300 dark:text-stone-600 select-none w-8 text-right mr-4">8</span>
                  <span>&nbsp;&nbsp;<span class="text-stone-500">]</span><span class="text-stone-400">,</span></span>
                </div>
                <div class="flex">
                  <span class="text-stone-300 dark:text-stone-600 select-none w-8 text-right mr-4">9</span>
                  <span>&nbsp;&nbsp;<span class="text-emerald-600 dark:text-emerald-400">dispo</span><span class="text-stone-400">:</span> <span class="text-violet-500">true</span></span>
                </div>
                <div class="flex">
                  <span class="text-stone-300 dark:text-stone-600 select-none w-8 text-right mr-4">10</span>
                  <span><span class="text-stone-500">}</span><span class="text-stone-400">;</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator bottom-left -->
    <div :class="loaded ? 'opacity-100' : 'opacity-0'"
      class="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 transition-opacity duration-700 delay-[1.5s]">
      <div class="w-[1px] h-12 bg-stone-300 dark:bg-stone-700 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1/2 bg-amber-500 animate-bounce-subtle"></div>
      </div>
      <span class="text-xs font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest [writing-mode:vertical-lr]">Scroll</span>
    </div>
  </section>
</template>
